<script lang="ts">
	import { Input, type FormInputEvent } from '$lib/shardcn/ui/input/index';
	import { Label } from '$lib/shardcn/ui/label/index';
	import { Button } from '$lib/shardcn/ui/button/index';
	import * as Table from '$lib/shardcn/ui/table/index';
	import {
		CollegeNameSchema,
		DiscordIdSchema,
		GamerSchema,
		RiotIdSchema,
		TeamNameSchema,
		TransactionSchema
	} from '$lib/zod/types';
	import { goto } from '$app/navigation';
	import { Checkbox } from '$lib/shardcn/ui/checkbox/index';

	let members: {
		phone: string;
		email: string;
		name: string;
		riotId: string;
		discordId: string;
		substitute: boolean;
		student: boolean;
		college: string | null;
	}[] = [];

	let teamName = '';
	let transactionId = '';
	let screenshot: File | null = null;
	let leaderRiotId = '';
	let leaderDiscrodId = '';

	let name = '';
	let phone = '';
	let email = '';
	let riotId = '';
	let discordId = '';
	let collegeName = '';
	let substitute = false;
	let student = true;

	let saving = false;

	let teamNameError = '';
	let transactionIdError = '';
	let screenshotError = '';
	let leaderRiotError = '';
	let leaderDiscordError = '';
	let collegeNameError = '';

	let nameError = '';
	let phoneError = '';
	let emailError = '';
	let discordError = '';
	let riotError = '';
	let genericError = '';

	let teamNameAvailable: boolean | null = null;

	function fileChanged(e: FormInputEvent) {
		if (!e.target || !e.target.files) return;

		screenshot = e.target.files[0];

		if (screenshot.size > 400000) {
			screenshotError = 'File size must be less than 400KB';
		} else {
			screenshotError = '';
		}
	}

	async function checkTeamName() {
		if (teamNameError !== '' || teamName === '') {
			return;
		}
		const res = await fetch('/api/check', {
			method: 'POST',
			body: JSON.stringify({
				teamName: teamName.trim(),
				eventCode: 'RS'
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
				name,
				riotId,
				discordId,
				substitute,
				student,
				college: collegeName || null
			}
		];
		name = '';
		email = '';
		phone = '';
		riotId = '';
		discordId = '';
		collegeName = '';
		student = true;
		substitute = false;
	}

	async function saveTeam(event: { currentTarget: EventTarget & HTMLFormElement }) {
		saving = true;
		const form = new FormData();
		form.append('teamName', teamName.trim().toUpperCase());
		form.append('transactionId', transactionId.trim());
		form.append('screenshot', screenshot);
		form.append('riotId', leaderRiotId);
		form.append('discordId', leaderDiscrodId);
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

	$: nameError = GamerSchema.shape.name.safeParse(name).error?.format()._errors[0] || '';
	$: emailError = GamerSchema.shape.email.safeParse(email).error?.format()._errors[0] || '';
	$: phoneError = GamerSchema.shape.phone.safeParse(phone).error?.format()._errors[0] || '';
	$: teamNameError = TeamNameSchema.safeParse(teamName).error?.format()._errors[0] || '';
	$: transactionIdError =
		TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || '';
	$: riotError = RiotIdSchema.safeParse(riotId).error?.format()._errors[0] || '';
	$: discordError = DiscordIdSchema.safeParse(discordId).error?.format()._errors[0] || '';
	$: leaderRiotError = RiotIdSchema.safeParse(leaderRiotId).error?.format()._errors[0] || '';
	$: leaderDiscordError =
		DiscordIdSchema.safeParse(leaderDiscrodId).error?.format()._errors[0] || '';
	$: collegeNameError = CollegeNameSchema.safeParse(collegeName).error?.format()._errors[0] || '';
	$: student ? '' : (collegeName = '');

	$: members.forEach((member) => {
		if (member.email === email) {
			emailError = 'Email already used';
		}
	});
</script>

<section class="mb-10 grid w-full place-items-center">
	<div
		class="order-2 m-4 w-11/12 rounded-md border border-btn-main bg-valorant-bg p-8 text-white shadow-md shadow-btn-main"
	>
		<div class="p-4 text-xs">
			<ul class="list-disc">
				<li>Minimum 4 student players required</li>
				<li>2 Substitute players & 5 live players required</li>
				<li>None of the members should be leader or member of other Respawn Battle</li>
				<li>Any violation of terms & conditions will lead to disqualification with no refunds</li>
			</ul>
		</div>
	</div>
	<form
		class="order-2 my-4 w-11/12 rounded-md border border-btn-main bg-valorant-bg md:p-8 text-white shadow-md shadow-btn-main"
		on:submit|preventDefault={saveTeam}
	>
		<div class="grid grid-rows-[auto_1fr]">
			<div class="grid grid-rows-[auto_1fr] gl:grid-cols-2 gl:gap-0 gap-5">
				<div class="grid content-start gap-5 p-4">
					<h2 class="mb-1 font-valorant font-bold text-2xl gl:text-4xl">Brace for Impact</h2>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="team_name">Team Name</Label>
						<div class="flex w-full items-center space-x-2">
							<Input
								bind:value={teamName}
								required
								type="text"
								id="team_name"
								placeholder="Team Name"
								class="bg-transparent"
							/>
							<Button
								on:click={checkTeamName}
								class="rounded-xl border-2 border-btn-main bg-btn-main">Check</Button
							>
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
							class="bg-transparent"
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
							class="text-black"
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
					<div class="flex w-full flex-col gap-1.5">
						<Label for="leader_riot_id">Team Leader Riot ID</Label>
						<Input
							bind:value={leaderRiotId}
							id="leader_riot_id"
							placeholder="Leader Riot ID"
							class="bg-transparent"
						/>
						{#if leaderRiotId !== ''}
							<p class="text-xs text-red-400">{leaderRiotError}</p>
						{/if}
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="leader_discord_id">Team Leader Discord ID</Label>
						<Input
							class="bg-transparent"
							bind:value={leaderDiscrodId}
							id="leader_discord_id"
							placeholder="Leader Discord ID"
						/>
						{#if leaderDiscrodId !== ''}
							<p class="text-xs text-red-400">{leaderDiscordError}</p>
						{/if}
					</div>
				</div>
				<div class="grid gap-5 border-btn-main p-4 md:p-6 py-4 gl:border-l gl:border-t-0 border-t">
					<h2 class=" mb-1 font-bold text-2xl font-valorant">Register your players</h2>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="member_name">Name</Label>
						<Input
							class="bg-transparent"
							name="name"
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
							class="bg-transparent"
							name="phone"
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
							class="bg-transparent"
							name="email"
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
					<div class="flex w-full flex-col gap-1.5">
						<Label for="riot_id">Member Riot ID</Label>
						<Input
							class="bg-transparent"
							name="riot_id"
							bind:value={riotId}
							required
							type="text"
							id="riot_id"
							placeholder="Member Riot ID"
						/>
						{#if riotId !== ''}
							<p class="text-xs text-red-400">{riotError}</p>
						{/if}
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="discord_id">Member Discord ID</Label>
						<Input
							class="bg-transparent"
							name="discord_id"
							bind:value={discordId}
							required
							type="text"
							id="discord_id"
							placeholder="Member Discord ID"
						/>
						{#if discordId !== ''}
							<p class="text-xs text-red-400">{discordError}</p>
						{/if}
					</div>

					<div class="items-top flex items-center space-x-2">
						<Checkbox
							disabled={members.filter((m) => m.substitute).length == 2}
							name="substitute"
							bind:checked={substitute}
							id="substitute"
							class="bg-white"
						/>
						<div class="grid gap-1.5 leading-none">
							<Label
								for="substitute"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Substitute player
							</Label>
						</div>
					</div>
					<div class="items-top flex items-center space-x-2">
						<Checkbox name="student" bind:checked={student} id="student" class="bg-white" />
						<div class="grid gap-1.5 leading-none">
							<Label
								for="student"
								class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Student player
							</Label>
						</div>
					</div>
					<div class="flex w-full flex-col gap-1.5">
						<Label for="college_name">College Name</Label>
						<Input
							class="bg-transparent"
							name="college_name"
							disabled={!student}
							bind:value={collegeName}
							required
							type="text"
							id="college_name"
							placeholder="College Name"
						/>
						{#if collegeName !== ''}
							<p class="text-xs text-red-400">{collegeNameError}</p>
						{/if}
						<p class="text-xs my-2">Please use full form as it will be used in your certificates.</p>
					</div>

					<Button
						class="mt-8 w-full rounded-xl border-2 border-btn-main bg-btn-main"
						on:click={addMember}
						disabled={!(
							nameError == '' &&
							phoneError == '' &&
							emailError == '' &&
							riotError == '' &&
							discordError == '' &&
							((student && collegeNameError == '') || !student)
						) || members.length == 6}>Add</Button
					>
				</div>
			</div>
			<div class="flex flex-col overflow-x-scroll p-4">
				<div>
					<Table.Root>
						<Table.Caption><p class="text-red-400">{genericError}</p></Table.Caption>
						<Table.Header>
							<Table.Row>
								<Table.Head>No</Table.Head>
								<Table.Head>Name</Table.Head>
								<Table.Head>Email</Table.Head>
								<Table.Head>Phone</Table.Head>
								<Table.Head>Riot ID</Table.Head>
								<Table.Head>Discord ID</Table.Head>
								<Table.Head>Substitute</Table.Head>
								<Table.Head>College Name</Table.Head>
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
									<Table.Cell>{member.riotId}</Table.Cell>
									<Table.Cell>{member.discordId}</Table.Cell>
									<Table.Cell>{member.substitute ? 'YES' : 'NO'}</Table.Cell>
									<Table.Cell>{member.college || ''}</Table.Cell>
									<Table.Cell class=" text-red-400">
										<button
											type="button"
											on:click={() => {
												members.splice(i, 1);
												members = members;
												genericError = '';
											}}
											class="fa-solid fa-user-xmark rounded-full p-3 hover:bg-slate-200"
										></button>
									</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
				<Button
					class="mt-8 w-full rounded-xl border-2 border-btn-main bg-btn-main"
					on:click={saveTeam}
					disabled={members.length !== 6 ||
						!teamNameAvailable ||
						saving ||
						screenshot === null ||
						members.filter((m) => m.substitute).length !== 2 ||
						transactionIdError ||
						!(leaderRiotError == '' && leaderDiscordError == '')}
				>
					{#if saving}
						Saving...
					{:else}
						<span>Save</span>
					{/if}
				</Button>
			</div>
		</div>
	</form>
</section>
