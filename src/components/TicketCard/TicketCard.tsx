import { Typography } from 'antd';

import tk from '~assets/turkish.png';
import su from '~assets/su.jpg';
import s7 from '~assets/s7.png';
import ba from '~assets/ba.png';
import plane from '~assets/plane.png';
import {
  ArrivalInfo,
  DepartureInfo,
  Spacer,
  StyledBtn,
  StyledDate,
  StyledHr,
  StyledImg,
  StyledInfo,
  StyledLogo,
  StyledPlane,
  StyledStop,
  StyledStopsBlock,
  StyledTime,
} from './styles';

interface TicketCardProps {
  ticket: Ticket;
  currency: string;
}

export const TicketCard = ({ ticket, currency }: TicketCardProps) => {
  return (
    <Spacer>
      <StyledLogo>
        <StyledImg src={logos[ticket.carrier]} alt={'logo'} />
        <StyledBtn>
          Купить <br /> за {formatPrice(ticket.price, currency)}
        </StyledBtn>
      </StyledLogo>

      <StyledInfo>
        <DepartureInfo>
          <StyledTime>{ticket.departure_time}</StyledTime>
          <Typography>
            {ticket.origin},{ticket.origin_name}
          </Typography>
          <StyledDate>{formatDate(ticket.departure_date)}</StyledDate>
        </DepartureInfo>

        <StyledStopsBlock>
          <StyledStop>{stops[ticket.stops]}</StyledStop>
          <StyledPlane>
            <StyledHr />
            <img src={plane} alt={'plane'} />
          </StyledPlane>
        </StyledStopsBlock>

        <ArrivalInfo>
          <StyledTime>{ticket.arrival_time}</StyledTime>
          <Typography>
            {ticket.destination_name},{ticket.destination}
          </Typography>
          <StyledDate>{formatDate(ticket.arrival_date)}</StyledDate>
        </ArrivalInfo>
      </StyledInfo>
    </Spacer>
  );
};

const stops: Record<string, string> = {
  '0': '',
  '1': '1 пересадка',
  '2': '2 пересадки',
  '3': '3 пересадки',
};

const currencySymbols: Record<string, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
};

const logos: Record<string, string> = {
  BA: ba,
  S7: s7,
  SU: su,
  TK: tk,
};

const formatPrice = (price: number, currency: string) => {
  const formattedPrice = exchangeRate(price, currency).toLocaleString('ru-RU', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
  return formattedPrice + ' ' + currencySymbols[currency];
};

const formatDate = (inputDate: string) => {
  const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const dateParts = inputDate.split('.');
  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const year = 2000 + parseInt(dateParts[2]);

  const date = new Date(year, month - 1, day);

  return `${day} ${months[month - 1]} ${year}, ${daysOfWeek[date.getDay()]}`;
};

const exchangeRate = (price: number, currency: string) => {
  switch (currency) {
    case 'RUB':
      return price;
    case 'USD':
      return price / 98;
    case 'EUR':
      return price / 103;
    default:
      return price;
  }
};
