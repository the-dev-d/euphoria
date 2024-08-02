<script lang="ts">
	import { Input, type FormInputEvent } from '$lib/shardcn/ui/input/index';
	import { Label } from '$lib/shardcn/ui/label/index';
	import { Button } from '$lib/shardcn/ui/button/index';
	import * as Table from '$lib/shardcn/ui/table/index';
	import { HuntMemberSchema, ImageSchema, TeamNameSchema, TransactionSchema } from '$lib/zod/types';
	import { goto } from '$app/navigation';

	let members: { phone: string; email: string; name: string }[] = [];

	let teamName = '';
	let transactionId = '';
	let screenshot: File | null = null;

	let name = '';
	let phone = '';
	let email = '';

	let saving = false;

	let teamNameError = '';
	let transactionIdError = '';
	let screenshotError = '';

	let nameError = '';
	let phoneError = '';
	let emailError = '';
	let genericError = '';

	let teamNameAvailable: boolean | null = null;

	function fileChanged(e: FormInputEvent) {
		if (!e.target || !e.target.files) return;

		screenshot = e.target.files[0];

		if (screenshot.size > 400000) {
			screenshotError = 'File size must be less than 400KB';
			console.log('Error');
		} else {
			screenshotError = '';
		}
	}

	async function checkTeamName() {
		console.log('Checking');
		if (teamNameError !== '' || teamName === '') {
			return;
		}
		const res = await fetch('/api/check', {
			method: 'POST',
			body: JSON.stringify({
				teamName: teamName.trim(),
				eventCode: 'TH'
			})
		});

		if (res.status != 200) {
			teamNameError = 'invalid input';
		}

		const data = await res.json();
		teamNameAvailable = data.available;
	}

	function addMember() {
		members = [
			...members,
			{
				email,
				phone,
				name
			}
		];
		name = '';
		email = '';
		phone = '';
	}

	async function saveTeam(event: { currentTarget: EventTarget & HTMLFormElement }) {
		saving = true;
		const form = new FormData();
		form.append('teamName', teamName.trim().toUpperCase());
		form.append('transactionId', transactionId.trim());
		form.append('screenshot', screenshot);
		form.append('members', JSON.stringify(members));

		const res = await fetch('', {
			method: 'POST',
			body: form
		});
		if (res.status == 200) {
			const { data } = await res.json();
			const parsed = JSON.parse(data);

			if (parsed[1] === false) {
				genericError = parsed[2];
			} else {
				goto('/dashboard');
			}
		}
		saving = false;
	}

	$: nameError = HuntMemberSchema.shape.name.safeParse(name).error?.format()._errors[0] || '';
	$: emailError = HuntMemberSchema.shape.email.safeParse(email).error?.format()._errors[0] || '';
	$: phoneError = HuntMemberSchema.shape.phone.safeParse(phone).error?.format()._errors[0] || '';
	$: teamNameError = TeamNameSchema.safeParse(teamName).error?.format()._errors[0] || '';
	$: transactionIdError =
		TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || '';
	$: members.forEach((member) => {
		if (member.email === email) {
			emailError = 'Email already used';
		}
	});
</script>

<section class="mb-10 grid w-full place-items-center">
	<div class="m-4 w-5/6 rounded-md border bg-white p-4 text-black shadow-md">
		<div class="p-4 text-xs">
			<ul class="list-disc">
				<li>4 Players including leader</li>
				<li>None of the members should be leader or member of other Treasure Hunt</li>
				<li>Any violation of terms & conditions will lead to disqualification with no refunds</li>
			</ul>
		</div>
	</div>
	<form
		class="w-5/6 rounded-md border bg-white p-6 text-black shadow-md"
		on:submit|preventDefault={saveTeam}
	>
		<div class="grid grid-rows-[auto_1fr] gap-6">
			<div class="relative grid gap-5 gl:grid-cols-2">
				<div class="grid gap-5 gl:px-5">
					<h2 class="mb-1">Register for the Hunt</h2>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="team_name">Team Name</Label>
						<div class="flex w-full items-center space-x-2">
							<Input
								bind:value={teamName}
								required
								type="text"
								id="team_name"
								placeholder="Team Name"
							/>
							<Button on:click={checkTeamName}>Check</Button>
						</div>
						{#if teamName !== ''}
							<p class="text-xs text-red-400">{teamNameError}</p>
							{#if teamNameAvailable == false}
								<p class="text-xs text-red-400">Team name already taken</p>
							{:else if teamNameAvailable}
								<p class="text-xs text-green-400">Team name available</p>
							{/if}
						{/if}
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="transaction_id">Transaction ID</Label>
						<Input
							bind:value={transactionId}
							required
							type="number"
							id="transaction_id"
							placeholder="UPI transaction ID"
						/>
						{#if transactionId !== ''}
							<p class="text-xs text-red-400">{transactionIdError}</p>
						{/if}
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="screenshot">Payment Screenshot</Label>
						<Input
							on:change={fileChanged}
							required
							accept=".jpg, .jpeg, .png"
							type="file"
							id="screenshot"
							placeholder="Payment Screenshot"
						/>
						{#if screenshotError !== ''}
							<p class="text-xs text-red-400">{screenshotError}</p>
						{/if}
					</div>
				</div>
				<div class="grid gap-5 gl:px-5">
					<h2 class="mb-1 mt-4">Register your members</h2>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="member_name">Name</Label>
						<Input
							bind:value={name}
							required
							type="text"
							id="member_name"
							placeholder="Member Name"
						/>
						{#if name !== ''}
							<p class="text-xs text-red-400">{nameError}</p>
						{/if}
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="member_phone">Phone</Label>
						<Input
							bind:value={phone}
							required
							type="text"
							id="member_phone"
							placeholder="Member Phone"
						/>
						{#if phone !== ''}
							<p class="text-xs text-red-400">{phoneError}</p>
						{/if}
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="member_email">Email</Label>
						<Input
							bind:value={email}
							required
							type="email"
							id="member_email"
							placeholder="Member Email"
						/>
						{#if email !== ''}
							<p class="text-xs text-red-400">{emailError}</p>
						{/if}
					</div>
					<Button
						on:click={addMember}
						disabled={!(nameError == '' && phoneError == '' && emailError == '') ||
							members.length == 3}>Add</Button
					>
				</div>
			</div>
			<div class="relative grid gap-5 overflow-x-scroll">
				<div>
					<Table.Root>
						<Table.Caption><p class="text-red-400">{genericError}</p></Table.Caption>
						<Table.Header>
							<Table.Row>
								<Table.Head>No</Table.Head>
								<Table.Head>Name</Table.Head>
								<Table.Head>Email</Table.Head>
								<Table.Head>Phone</Table.Head>
								<Table.Head>Remove</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each members as member, i (i)}
								<Table.Row>
									<Table.Cell>{i + 1}</Table.Cell>
									<Table.Cell>{member.name}</Table.Cell>
									<Table.Cell>{member.email}</Table.Cell>
									<Table.Cell>{member.phone}</Table.Cell>
									<Table.Cell class="text-red-400">
										<button
											type="button"
											on:click={() => {
												members.splice(i, 1);
												members = members;
											}}
											class="fa-solid fa-user-xmark rounded-full p-3 hover:bg-slate-200"
										></button>
									</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			</div>
		</div>
		<Button
			class="mt-8 w-full"
			on:click={saveTeam}
			disabled={members.length !== 3 ||
				!teamNameAvailable ||
				saving ||
				screenshot === null ||
				transactionIdError}
		>
			{#if saving}
				Saving...
			{:else}
				<span>Save</span>
			{/if}
		</Button>
	</form>
</section>
