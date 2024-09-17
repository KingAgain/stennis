import React from "react";
import { Button, ButtonGroup, Chip, Card, CardBody, Dropdown, Image, DropdownTrigger, DropdownMenu, DropdownItem, Navbar, NavbarBrand, NavbarContent, Link, Selection } from "@nextui-org/react"
import { CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const PCalendat: React.FC = () => {
  const [selectedYear, setSelectedYear] = React.useState<Selection>(new Set(["2024"]));
  const tournamentStat = React.useMemo(() => {
    const allTournaments = [
      {year: 2024, week: 27, id: 1, name: '温布尔登', location: '伦敦', singleHost: 'All England', doubleHost: 'All England', surface: '草地', logoSrc: '../../static/GSWC.png'},
    ];
    if (!(selectedYear instanceof Set))
      return allTournaments;
    return allTournaments.filter(t => selectedYear.has(t.year.toString()));
  }, [selectedYear]);
  tournamentStat.sort((a, b) => a.week - b.week)

  type Tournament = typeof tournamentStat[0]

  const week2date = [
    { id: 27, date: '07-01' },
    { id: 29, date: '07-15' },
    { id: 30, date: '07-22' },
  ]

  const surfacePic: { [key: string]: string } = {
    '草地': '../../../static/tournament-grass.jpg',
    '红土': '../../../static/tournament-clay.jpg',
    '硬地': '../../../static/tournament-hard.jpg',
  }

  const navigate = useNavigate();

  const tournamentCard = ({ t }: { t: Tournament }) => {

    const handlePress = () => {
      navigate(`/tournament/${t.id}`);
    };

    return (
      <Card isFooterBlurred radius="lg" className="border-none mx-8 my-4" shadow="md" isPressable onPress={handlePress}>
        <CardBody className="overflow-visible p-0 grid grid-cols-2">
          <div className="m-2 grid grid-rows-2">
            <div className="flex justify-around place-self-center">
              <Image src={t.logoSrc} height={40} width={40} />
              <div className="flex flex-col px-2">
                <h5 className="text-sm text-black font-bold text-center">{t.name}</h5>
                <p className="text-xs text-gray-600 text-center">{t.location}</p>
              </div>
            </div>
            <div className="place-self-center">
              <h5 className="text-xs text-black py-1 text-center">{t.singleHost}</h5>
              <p className="text-xs text-black text-center">{t.doubleHost}</p>
            </div>
          </div>
          <Image className="object-cover aspect-square flex-1" src={surfacePic[t.surface]} width={150} radius="none" />
        </CardBody>
      </Card>
    );
  };

  const calendarCards = []

  const weeks = [...new Set(tournamentStat.map(stat => stat.week))];

  for (let i = 0; i < weeks.length; i++) {
    if (i === 0 || week2date.find(item => item.id === weeks[i])?.date.slice(0, 2) !== week2date.find(item => item.id === weeks[i - 1])?.date.slice(0, 2)) {
      calendarCards.push(
        <Chip id={`month-${week2date.find(item => item.id === weeks[i])?.date.slice(0, 2)}`} color="default" className="scroll-mt-40 m-2 self-center shadow-medium" size='lg' variant="flat">W{weeks[i]} {week2date.find(item => item.id === weeks[i])?.date}</Chip>
      )
    }
    else {
      calendarCards.push(
        <Chip color="default" className="m-2 self-center shadow-medium" size='lg' variant="flat">W{weeks[i]} {week2date.find(item => item.id === weeks[i])?.date}</Chip>
      )
    }
    const currentTournaments = tournamentStat.filter(stat => stat.week === weeks[i])
    const weekCards = []
    for (let j = 0; j < currentTournaments.length; j++) {
      weekCards.push(
        tournamentCard({ t: currentTournaments[j] })
      )
    }
    calendarCards.push(
      <div className="flex flex-row justify-center my-4 flex-wrap">
        {weekCards}
      </div>
    )
  }

  return (
    <div className="justify-center m-8 flex flex-col">
      <Navbar isBordered={true} className='rounded-lg bg-white/[.51] top-16 shadow-medium mb-2 justify-center w-[80vw] self-center'>
        <NavbarBrand>
          <Dropdown>
            <DropdownTrigger>
              <Button className="max-w-2 self-center text-gray-800" variant="light" startContent={<CalendarOutlined />}>{selectedYear}</Button>
            </DropdownTrigger>
            <DropdownMenu disallowEmptySelection selectionMode="single" selectedKeys={selectedYear} onSelectionChange={setSelectedYear}>
              <DropdownItem key="2021">2021</DropdownItem>
              <DropdownItem key="2022">2022</DropdownItem>
              <DropdownItem key="2023">2023</DropdownItem>
              <DropdownItem key="2024">2024</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarBrand>
        <NavbarContent justify="center" className="flex gap-4 flex-wrap">
          <ButtonGroup>
            <Button variant='light' as={Link} href="#month-01">一月</Button>
            <Button variant='light' as={Link} href="#month-02">二月</Button>
            <Button variant='light' as={Link} href="#month-03">三月</Button>
            <Button variant='light' as={Link} href="#month-04">四月</Button>
            <Button variant='light' as={Link} href="#month-05">五月</Button>
            <Button variant='light' as={Link} href="#month-06">六月</Button>
            <Button variant='light' as={Link} href="#month-07">七月</Button>
            <Button variant='light' as={Link} href="#month-08">八月</Button>
            <Button variant='light' as={Link} href="#month-09">九月</Button>
            <Button variant='light' as={Link} href="#month-10">十月</Button>
            <Button variant='light' as={Link} href="#month-11">十一月</Button>
            <Button variant='light' as={Link} href="#month-12">十二月</Button>
          </ButtonGroup>
        </NavbarContent>
      </Navbar>
      {calendarCards}
    </div>
  );
}

export default PCalendat