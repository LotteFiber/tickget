import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "./components/ticket-list";

export const dynamic = "force-dynamic";

const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
