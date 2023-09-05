import { TicketCard } from '~components';
import { Spacer } from './styles';

export interface TicketsListProps {
  tickets: Ticket[];
  currency: string;
}

export const TicketsList = ({ tickets, currency }: TicketsListProps) => {
  return (
    <Spacer>
      {tickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} currency={currency} />
      ))}
    </Spacer>
  );
};
