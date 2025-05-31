"use client";
import { useActionState } from "react";
import { FieldError } from "@/components/form/field-error";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    {
      message: "",
      fieldError: {},
    }
  );

  return (
    <>
      <form action={action} className="flex flex-col gap-y-2 ">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          defaultValue={
            (actionState.payload?.get("title") as string) ?? ticket?.title
          }
        />
        <FieldError actionState={actionState} name="title" />

        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          defaultValue={
            (actionState.payload?.get("content") as string) ?? ticket?.content
          }
        />
        <FieldError actionState={actionState} name="content" />

        <SubmitButton label={ticket ? "Edit" : "Create"} />
        {actionState.message}
      </form>
    </>
  );
};

export { TicketUpsertForm };
