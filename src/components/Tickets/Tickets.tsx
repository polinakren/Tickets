import { useState } from 'react';

import { Filter, TicketFilterValues, TicketsList } from '~components';
import { tickets } from '~utils/tickets';
import { Spacer } from './styles';

export const Tickets = () => {
  const [filter, setFilter] = useState<TicketFilterValues>(defaultFilter);

  const displayedTickets = tickets.filter(ticket => filter.stops?.includes(ticket.stops));

  const onFilterChange = (filterParams: TicketFilterValues) => {
    setFilter(filter => ({ ...filter, ...filterParams }));
  };

  return (
    <Spacer>
      <Filter onFilterChange={onFilterChange} initialValues={defaultFilter} />
      <TicketsList tickets={displayedTickets} currency={filter.currency!} />
    </Spacer>
  );
};

const defaultFilter = {
  currency: 'RUB',
  stops: [0, 1, 2, 3],
};
