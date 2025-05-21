import { initialTickets } from "@/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }
  return <h2 className="text-lg">Tickets Page {ticketId}</h2>;
};

export default TicketPage;
