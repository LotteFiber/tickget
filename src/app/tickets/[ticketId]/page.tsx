import { initialTickets } from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }
  return <h2 className="text-lg">Tickets Page {params.ticketId}</h2>;
};

export default TicketPage;
