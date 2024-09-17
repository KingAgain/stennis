import React from 'react'
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, Divider, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Image, Tab, Tabs, User, Chip, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from '@nextui-org/react'
import { Cell, PieChart, Pie } from 'recharts'
import { CalendarOutlined, SearchOutlined } from "@ant-design/icons";

const PHistory: React.FC = () => {
    const [searched, setSearched] = React.useState<boolean>(false);
    const [selectedYear, setSelectedYear] = React.useState<string>("2024");
    const [selectedPlayer, setSelectedPlayer] = React.useState<string>("花滑女王水痘");
    const [selectedType, setSelectedType] = React.useState<string>("single");
    const [selectedLevel, setSelectedLevel] = React.useState<string>("all");
    const [selectedStage, setSelectedStage] = React.useState<string>("all");
    const [selectedSurface, setSelectedSurface] = React.useState<string>("all");
    const [resultContent, setResultContent] = React.useState<JSX.Element[]>([]);
    const [data, setData] = React.useState<{ name: string, value: number }[]>([]);
    const [searchStat,setSearchStat] = React.useState<{ year: string, player: string, type: string, level: string, stage: string, surface: string }>({
        "year": "2024",
        "player": "花滑女王水痘",
        "type": "单打",
        "level": "all",
        "stage": "all",
        "surface": "all",
    })
    const userStat: { [key: string]: { nickname: string; userName: string; avatarSrc: string; } } = React.useMemo(() => ({
        "花滑女王水痘": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "活宝哈u": { "nickname": "活宝哈u", "userName": "活宝哈u", "avatarSrc": "../../../static/avatar2.jpg" },
        "雨子成说": { "nickname": "雨子成说", "userName": "雨子成说", "avatarSrc": "../../../static/avatar3.jpg" },
        "数字南": { "nickname": "数字南", "userName": "数字南", "avatarSrc": "../../../static/avatar4.jpg" },
    }), []);
    const userData: { label: string; value: string; description: string; }[] = [];
    for (const user in userStat) {
        userData.push({ label: userStat[user].nickname, value: userStat[user].userName, description: userStat[user].avatarSrc })
    }

    let searchResult: {
        win: number,
        lose: number,
        tournaments: { tournamentStats: { drawSize: number, tournament: string, date: string, logo: string, surface: string, id: number, level: string }, matches: { round: string, opponent: string, score: string, winner: string }[] }[],
    } = {
        win: 2,
        lose: 1,
        tournaments: [],
    }

    const handleSearch = () => {
        setSearchStat({
            "year": selectedYear as string,
            "player": selectedPlayer as string,
            "type": selectedType as string,
            "level": selectedLevel as string,
            "stage": selectedStage as string,
            "surface": selectedSurface as string,
        })

        setSearched(true)
        searchResult = {
            "win": 1,
            "lose": 0,
            "tournaments": [
                {
                    "tournamentStats": 
                    {
                        "drawSize": 16,
                        "tournament": "温网",
                        "date": "2024-07-15 ~ 2024-07-21",
                        "logo": "../../../static/GSWC.png",
                        "surface": "clay",
                        "id": 1,
                        "level": "大满贯",
                    },
                    "matches": [
                        { "round": "F", "opponent": "雨子成说", "score": "7-5 9-1 5-5", "winner": "花滑女王水痘" }
                    ]
                },
            
            ],

        
        }
        const searchResultContent: JSX.Element[] = [];
        for(const tournament of searchResult.tournaments){
            console.log(tournament)
            searchResultContent.push(
                <CardBody className="overflow-visible p-2 flex items-center flex-row justify-center bg-slate-200">
                    <Image src={tournament.tournamentStats.logo} height={30} width={30} />
                    <p className='px-2'>{tournament.tournamentStats.tournament} {tournament.tournamentStats.date}</p>
                    <Chip color="secondary" className="self-center shadow-medium mx-1" size='md' variant="flat">{tournament.tournamentStats.surface}</Chip>
                </CardBody>
            )
            searchResultContent.push(
                <CardBody className="overflow-visible p-2 flex items-center flex-row justify-center">
                    <Table hideHeader className='w-full px-16' removeWrapper>
                        <TableHeader>
                            <TableColumn align='center'>阶段</TableColumn>
                            <TableColumn align='center'>输赢</TableColumn>
                            <TableColumn>对手</TableColumn>
                            <TableColumn>比分</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {tournament.matches.map((match) => (
                                <TableRow>
                                    <TableCell>{match.round}</TableCell>
                                    <TableCell>{match.winner == searchStat.player ? "W" : "L"}</TableCell>
                                    <TableCell>
                                        <User name={match.opponent} description={match.opponent} avatarProps={{ src: "../../../static/avatar3.jpg" }} />
                                    </TableCell>
                                    <TableCell>{match.score}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardBody>
            )
        }
        setResultContent(searchResultContent)
        setData([
            { name: 'win', value: searchResult.win },
            { name: 'lose', value: searchResult.lose }
        ])
    }

    return (
        <div className="justify-center m-8 flex flex-col">
            <Card className='items-center flex-col flex w-[80vw] self-center'>
                <div className='m-4 text-xl font-medium'>
                    历史战绩
                </div>
                <div className='flex'>
                    <Dropdown className='m-2'>
                        <DropdownTrigger>
                            <Button className="max-w-2 self-center text-gray-800" variant="flat" startContent={<CalendarOutlined />}>{selectedYear}</Button>
                        </DropdownTrigger>
                        <DropdownMenu disallowEmptySelection selectionMode="single" selectedKeys={selectedYear} onSelectionChange={(year) => setSelectedYear(year as string)}>
                            <DropdownItem key="2021">2021</DropdownItem>
                            <DropdownItem key="2022">2022</DropdownItem>
                            <DropdownItem key="2023">2023</DropdownItem>
                            <DropdownItem key="2024">2024</DropdownItem>
                            <DropdownItem key="全部">全部</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Autocomplete defaultItems={userData} placeholder="选手" className='max-w-xs m-2' onSelectionChange={(value) => setSelectedPlayer(value as string)}>
                        {(user) => <AutocompleteItem key={user.label} textValue={user.label}><User name={user.label} description={user.value} avatarProps={{ src: user.description }} /></AutocompleteItem>}
                    </Autocomplete>
                    <Button className='my-2' color='primary' radius='md' variant='flat' isIconOnly onClick={handleSearch}>
                        <SearchOutlined />
                    </Button>
                </div>
                <div>
                    <Tabs className='m-2' onSelectionChange={(key) => setSelectedType(key as string)}>
                        <Tab title="单打" key='单打'></Tab>
                        {/* <Tab title="双打"></Tab> */}
                    </Tabs>
                    <Tabs className='m-2' onSelectionChange={(key) => setSelectedLevel(key as string)}>
                        <Tab title="全部级别" key="all"></Tab>
                        <Tab title="大满贯" key="大满贯"></Tab>
                        <Tab title="一级赛" key="一级赛"></Tab>
                        <Tab title="巡回赛" key="巡回赛"></Tab>
                    </Tabs>

                </div>
                <div>
                    <Tabs className='m-2' onSelectionChange={(key) => setSelectedStage(key as string)}>
                        <Tab title="全部阶段" key="all"></Tab>
                        <Tab title="正赛" key="正赛"></Tab>
                        <Tab title="决赛" key="决赛"></Tab>
                    </Tabs>
                    <Tabs className='m-2' onSelectionChange={(key) => setSelectedSurface(key as string)}>
                        <Tab title="全部场地" key="all"></Tab>
                        <Tab title="硬地" key="硬地"></Tab>
                        <Tab title="草地" key="草地"></Tab>
                        <Tab title="红土" key="红土"></Tab>
                    </Tabs>
                </div>
                {searched?
                    <CardBody className="overflow-visible p-0 grid grid-cols-2 w-full mt-2">
                        <div className="flex flex-col justify-center bg-slate-100 ">
                            <div className="flex justify-around place-self-center items-center row-span-2 mt-10 mb-6">
                                <Image src={userStat[searchStat.player].avatarSrc} height={60} width={60} />
                                <div className="flex flex-col px-4">
                                    <h5 className="text-2xl text-black font-bold text-center">{userStat[searchStat.player].nickname}</h5>
                                    <p className="text-lg text-gray-600 text-center">{userStat[searchStat.player].userName}</p>
                                </div>
                            </div>
                            <div className="place-self-center my-4">
                                <p className="text-md text-gray-600 py-1 text-center">{searchStat.year} {searchStat.type}</p>
                                <div className='mt-2'>
                                    {   searchStat.level === 'all'
                                        ?null
                                        :<Chip color="secondary" className="self-center shadow-medium mx-1" size='md' variant="flat">{searchStat.level}</Chip>
                                    }
                                    {   searchStat.stage === 'all'
                                        ?null
                                        :<Chip color="secondary" className="self-center shadow-medium mx-1" size='md' variant="flat">{searchStat.stage}</Chip>
                                    }
                                    {   searchStat.surface === 'all'
                                        ?null
                                        :<Chip color="success" className="self-center shadow-medium mx-1" size='md' variant="flat">{searchStat.surface}</Chip>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center bg-slate-100 '>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-center text-4xl text-[#82ca9d] font-semibold'>{searchResult.win}</h2>
                                <Divider />
                                <p className='text-center text-xl text-[#82ca9d]'>胜 {Math.round((searchResult.win/(searchResult.win+searchResult.lose)*100))}%</p>
                            </div>
                            <PieChart width={300} height={250}>
                                <Pie data={data} dataKey="value" outerRadius={80} innerRadius={60}>
                                    <Cell key="胜" fill="#82ca9d" />
                                    <Cell key="负" fill="#ca8282" />
                                </Pie>
                            </PieChart>
                            <div className='flex flex-col justify-center'>
                                <h2 className='text-center text-4xl text-[#ca8282] font-semibold'>{searchResult.lose}</h2>
                                <Divider />
                                <p className='text-center text-xl text-[#ca8282]'>负 {Math.round((searchResult.lose/(searchResult.win+searchResult.lose)*100))}%</p>
                            </div>
                        </div>
                    </CardBody>
                    :null
                }
                {searched?
                    resultContent
                    :null
                }
            </Card>
        </div>
    )
}

export default PHistory