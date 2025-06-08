import { Ticket } from "@prisma/client";
import { LucideTrash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TicketMoreMenuProps = {
  ticket: Ticket;
  trigger: React.ReactNode;
};

const deleteButton = (
  <DropdownMenuItem>
    <LucideTrash className="mr-2 h-4 w-4" />
    <span>Delete</span>
  </DropdownMenuItem>
);

const TicketMoreMenu = ({ trigger }: TicketMoreMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side="right">
        {deleteButton}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { TicketMoreMenu };
