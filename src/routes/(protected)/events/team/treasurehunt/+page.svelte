<script lang="ts">
    import { Input, type FormInputEvent } from "$lib/shardcn/ui/input/index";
    import { Label } from "$lib/shardcn/ui/label/index";
    import { Button } from "$lib/shardcn/ui/button/index";
    import * as Table from "$lib/shardcn/ui/table/index";
	import { HuntMemberSchema, ImageSchema, TeamNameSchema, TransactionSchema } from "$lib/zod/types";
	import { goto } from "$app/navigation";

    let members: {phone: string, email:string, name: string}[] = [];

    let teamName = "";
    let transactionId = "";
    let screenshot: File|null = null;

    let name = "";
    let phone = "";
    let email = "";

    let saving = false;

    let teamNameError = "";
    let transactionIdError = "";
    let screenshotError = "";

    let nameError = "";
    let phoneError = "";
    let emailError = "";
    let genericError = "";

    let teamNameAvailable: boolean|null = null;

    function fileChanged(e: FormInputEvent) {

        if(!e.target || !e.target.files)
            return;
            
        screenshot = e.target.files[0];
        
        if(screenshot.size > 400000) {
            screenshotError = "File size must be less than 400KB"
            console.log("Error")
        }
        else {
            screenshotError = "";
        }
    }

    async function checkTeamName() {

        console.log("Checking");
        if(teamNameError !== "" || teamName === "") {
            return;
        }
        const res = await fetch('/api/check', {
            method: "POST",
            body: JSON.stringify({
                teamName: teamName.trim(),
                eventCode: "TH"
            })
        })

        if(res.status != 200) {
            teamNameError = "invalid input";
        }

        const data = await res.json();
        teamNameAvailable = data.available;
    }

    function addMember() {
        members = [...members, {
            email, phone, name
        }];
        name = "";
        email = "";
        phone = "";
    }

    async function saveTeam(event: { currentTarget: EventTarget & HTMLFormElement }) {

        saving = true;
        const form = new FormData();
        form.append("teamName", teamName.trim().toUpperCase());
        form.append("transactionId", transactionId.trim());
        form.append("screenshot", screenshot);
        form.append("members", JSON.stringify(members));

        const res = await fetch("", {
            method: "POST",
            body: form
        });
        if(res.status == 200) {
            const {data} = await res.json();
            const parsed = JSON.parse(data);

            if(parsed[1] === false) {
                genericError = parsed[2];
            }
            else {
                goto("/dashboard");
            }
        }
        saving = false;
    }

    $: nameError = HuntMemberSchema.shape.name.safeParse(name).error?.format()._errors[0] || "";
    $: emailError = HuntMemberSchema.shape.email.safeParse(email).error?.format()._errors[0] || "";
    $: phoneError = HuntMemberSchema.shape.phone.safeParse(phone).error?.format()._errors[0] || "";
    $: teamNameError = TeamNameSchema.safeParse(teamName).error?.format()._errors[0] || "";
    $: transactionIdError = TransactionSchema.safeParse(transactionId).error?.format()._errors[0] || "";
    $: members.forEach(member => {
        if(member.email === email) {
            emailError = "Email already used"
        }
    })

</script>


<section class="w-full bg-slate-100 h-[100svh] grid place-items-center">
    <div class="text-black w-5/6 p-4 bg-white m-4 border shadow-md rounded-md">
        <div class="text-xs p-4">
            <ul class="list-disc">
                <li>4 Players including leader</li>
                <li>None of the members should be leader or member of other Treasure Hunt</li>
                <li>Any violation of terms & conditions will lead to disqualification with no refunds</li>
            </ul>
        </div>
    </div>
    <form class="bg-white shadow-md p-6 rounded-md border text-black w-5/6"   on:submit|preventDefault={saveTeam}>
        <div class="grid grid-cols-[auto_1fr] gap-6">
            <div class="grid gap-5">
                <div class="grid gap-5">
                    <h2 class="mb-1">Register for the Hunt</h2>
                    <div class="flex w-full max-w-sm flex-col gap-1.5">
                        <Label for="team_name">Team Name</Label>
                        <div class="flex w-full max-w-sm items-center space-x-2">
                            <Input bind:value={teamName} required type="text" id="team_name" placeholder="Team Name" />
                            <Button on:click={checkTeamName}>Check</Button>
                        </div>
                        {#if teamName !== ""}
                            <p class="text-red-400 text-xs">{teamNameError}</p>
                            {#if teamNameAvailable == false}
                                <p class="text-red-400 text-xs">Team name already taken</p>
                            {:else if teamNameAvailable}
                                <p class="text-green-400 text-xs">Team name available</p>
                            {/if}
                        {/if}
                    </div>
                    <div class="flex w-full max-w-sm flex-col gap-1.5">
                        <Label for="transaction_id">Transaction ID</Label>
                        <Input bind:value={transactionId} required type="number" id="transaction_id" placeholder="UPI transaction ID" />
                        {#if transactionId !== ""}
                            <p class="text-red-400 text-xs">{transactionIdError}</p>
                        {/if}
                    </div>
                    <div class="flex w-full max-w-sm flex-col gap-1.5">
                        <Label for="screenshot">Payment Screenshot</Label>
                        <Input on:change={fileChanged} required accept=".jpg, .jpeg, .png" type="file" id="screenshot" placeholder="Payment Screenshot" />
                        {#if screenshotError !== "" }
                            <p class="text-red-400 text-xs">{screenshotError}</p>
                        {/if}
                    </div>
                </div>
                <div class="grid gap-5">
                    <h2 class="mt-4 mb-1">Register your members</h2>
                    <div class="flex w-full max-w-sm flex-col gap-1.5">
                        <Label for="member_name">Name</Label>
                        <Input bind:value={name} required type="text" id="member_name" placeholder="Member Name" />
                        {#if name !== ""}
                            <p class="text-red-400 text-xs">{nameError}</p>
                        {/if}
                    </div>
                    <div class="flex w-full max-w-sm flex-col gap-1.5">
                        <Label for="member_phone">Phone</Label>
                        <Input bind:value={phone} required type="text" id="member_phone" placeholder="Member Phone" />
                        {#if phone !== ""}
                            <p class="text-red-400 text-xs">{phoneError}</p>
                        {/if}
                    </div>
                    <div class="flex w-full max-w-sm flex-col gap-1.5">
                        <Label for="member_email">Email</Label>
                        <Input bind:value={email} required type="email" id="member_email" placeholder="Member Email" />
                        {#if email !== ""}
                            <p class="text-red-400 text-xs">{emailError}</p>
                        {/if}
                    </div>
                    <Button on:click={addMember}  disabled={!(nameError=="" && phoneError == "" && emailError == "") || members.length == 3 }>Add</Button>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex-1">
                    <Table.Root>
                        <Table.Caption> <p class="text-red-400">{genericError}</p> </Table.Caption>
                        <Table.Header>
                          <Table.Row>
                            <Table.Head class="w-[100px]">No</Table.Head>
                            <Table.Head>Name</Table.Head>
                            <Table.Head>Email</Table.Head>
                            <Table.Head class="text-right">Phone</Table.Head>
                            <Table.Head class="text-right">Remove</Table.Head>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          {#each members as member, i (i)}
                            <Table.Row>
                              <Table.Cell class="font-medium">{i+1}</Table.Cell>
                              <Table.Cell>{member.name}</Table.Cell>
                              <Table.Cell>{member.email}</Table.Cell>
                              <Table.Cell class="text-right">{member.phone}</Table.Cell>
                              <Table.Cell class="text-right text-red-400">
                                <button type="button" on:click={() => {members.splice(i, 1); members = members}}  class="fa-solid fa-user-xmark p-3 rounded-full hover:bg-slate-200"></button>
                            </Table.Cell>
                            </Table.Row>
                          {/each}
                        </Table.Body>
                      </Table.Root>
                </div>
                  <Button class="w-full mt-8" on:click={saveTeam} disabled={ members.length !== 3 || !teamNameAvailable || saving || screenshot===null || transactionIdError }>
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