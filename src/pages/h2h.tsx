import React from 'react'
import { Autocomplete, AutocompleteItem, Button, Card, CardBody, Divider, Image, Tab, Tabs, User, Chip, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow } from '@nextui-org/react'
import { Cell, PieChart, Pie } from 'recharts'

const PH2h: React.FC = () => {
    const [searched, setSearched] = React.useState<boolean>(false);
    const [selectedPlayer1, setSelectedPlayer1] = React.useState<string>("花滑女王水痘");
    const [selectedPlayer2, setSelectedPlayer2] = React.useState<string>("雨子成说");
    const [selectedType, setSelectedType] = React.useState<string>("single");
    const [selectedLevel, setSelectedLevel] = React.useState<string>("all");
    const [selectedStage, setSelectedStage] = React.useState<string>("all");
    const [selectedSurface, setSelectedSurface] = React.useState<string>("all");
    const [resultContent, setResultContent] = React.useState<JSX.Element[]>([]);
    const [data, setData] = React.useState<{ name: string, value: number }[]>([]);
    const [searchStat,setSearchStat] = React.useState<{ player1: string, player2: string, type: string, level: string, stage: string, surface: string }>({
        "player1": "花滑女王水痘",
        "player2": "雨子成说",
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

    let searchResult: {win: number, lose: number, matches: {year: string, level: string, stage: string, surface: string, tournament: string, round: string, winner: string, score: string}[],
    } = {
        win: 2,
        lose: 1,
        matches: [],
    }

    const handleSearch = () => {
        setSearchStat({
            "player1": selectedPlayer1,
            "player2": selectedPlayer2,
            "type": selectedType,
            "level": selectedLevel,
            "stage": selectedStage,
            "surface": selectedSurface,
        })

        setSearched(true);
        searchResult = {
            win: 2,
            lose: 1,
            matches: [
                {
                    year: "2024",
                    level: "GS",
                    stage: "F",
                    surface: "草地",
                    tournament: "温网",
                    round: "F",
                    winner: "花滑女王水痘",
                    score: "7-5 9-1 5-5",
                },
            ],
        }

        const result: JSX.Element = (
            <CardBody className="overflow-visible p-0 flex items-center flex-row justify-center rounded-none">
                <Table className='w-full rounded-none' removeWrapper>
                <TableHeader className='rounded-none'>
                    <TableColumn align='center'>年份</TableColumn>
                    <TableColumn align='center'>级别</TableColumn>
                    <TableColumn align='center'>场地</TableColumn>
                    <TableColumn align='center'>赛事</TableColumn>
                    <TableColumn align='center'>轮次</TableColumn>
                    <TableColumn align='center'>胜者</TableColumn>
                    <TableColumn align='center'>比分</TableColumn>
                </TableHeader>
                <TableBody>
                    {searchResult.matches.map((match)=>(
                        <TableRow>
                            <TableCell>{match.year}</TableCell>
                            <TableCell>{match.level}</TableCell>
                            <TableCell>{match.surface}</TableCell>
                            <TableCell>{match.tournament}</TableCell>
                            <TableCell>{match.round}</TableCell>
                            <TableCell>
                                <User name={userStat[match.winner].nickname} description={userStat[match.winner].userName} avatarProps={{ src: userStat[match.winner].avatarSrc }} />
                            </TableCell>
                            <TableCell>{match.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardBody>
        )
        setResultContent([result])
        setData([
            { name: 'win', value: searchResult.win },
            { name: 'lose', value: searchResult.lose }
        ])
    }
    
    return (
        <div className="justify-center m-8 flex flex-col">
            <Card className='items-center flex-col flex w-[80vw] self-center'>
                <div className='m-4 text-xl font-medium'>
                    H2H
                </div>
                <div className='flex'>
                <Autocomplete defaultItems={userData} placeholder="选手1" className='max-w-xs m-2' onSelectionChange={(value) => setSelectedPlayer1(value as string)}>
                        {(user) => <AutocompleteItem key={user.label} textValue={user.label}><User name={user.label} description={user.value} avatarProps={{ src: user.description }} /></AutocompleteItem>}
                    </Autocomplete>
                    <Button className='my-2' color='primary' radius='md' variant='flat' isIconOnly onClick={handleSearch}>
                        VS
                    </Button>
                    <Autocomplete defaultItems={userData} placeholder="选手2" className='max-w-xs m-2' onSelectionChange={(value) => setSelectedPlayer2(value as string)}>
                        {(user) => <AutocompleteItem key={user.label} textValue={user.label}><User name={user.label} description={user.value} avatarProps={{ src: user.description }} /></AutocompleteItem>}
                    </Autocomplete>
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
                <CardBody className="overflow-visible p-0 grid grid-cols-3 w-full mt-2">
                    <div className="flex flex-col justify-center bg-slate-100 ">
                        <div className="flex justify-around place-self-center items-center row-span-2 mt-10 mb-6">
                            <Image src={userStat[searchStat.player1].avatarSrc} height={60} width={60} />
                            <div className="flex flex-col px-4">
                                <h5 className="text-2xl text-black font-bold text-center">{userStat[searchStat.player1].nickname}</h5>
                                <p className="text-lg text-gray-600 text-center">{userStat[searchStat.player1].userName}</p>
                            </div>
                        </div>
                        <div className="place-self-center my-4">
                            <div className='mt-2'>
                                <Chip color="primary" className="self-center shadow-medium mx-1" size='md' variant="flat">NO.2</Chip>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center bg-slate-100 '>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-center text-4xl text-[#82ca9d] font-semibold'>{searchResult.win}</h2>
                            <Divider />
                            <p className='text-center text-xl text-[#82ca9d]'>{Math.round((searchResult.win/(searchResult.win+searchResult.lose)*100))}%</p>
                        </div>
                        <div>
                            <PieChart width={300} height={250}>
                                <Pie data={data} dataKey="value" outerRadius={80} innerRadius={60}>
                                    <Cell key="胜" fill="#82ca9d" />
                                    <Cell key="负" fill="#ca8282" />
                                </Pie>
                            </PieChart>
                            <div className='mb-4 flex justify-center'>
                                <Chip color="secondary" className="self-center shadow-medium mx-1" size='md' variant="flat">单打</Chip>
                                <Chip color="secondary" className="self-center shadow-medium mx-1" size='md' variant="flat">大满贯</Chip>
                                <Chip color="secondary" className="self-center shadow-medium mx-1" size='md' variant="flat">决赛</Chip>
                                <Chip color="success" className="self-center shadow-medium mx-1" size='md' variant="flat">草地</Chip>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-center text-4xl text-[#ca8282] font-semibold'>{searchResult.lose}</h2>
                            <Divider />
                            <p className='text-center text-xl text-[#ca8282]'>{Math.round((searchResult.lose/(searchResult.win+searchResult.lose)*100))}%</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center bg-slate-100 ">
                        <div className="flex justify-around place-self-center items-center row-span-2 mt-10 mb-6">
                            <Image src={userStat[searchStat.player2].avatarSrc} height={60} width={60} />
                            <div className="flex flex-col px-4">
                                <h5 className="text-2xl text-black font-bold text-center">{userStat[searchStat.player1].nickname}</h5>
                                <p className="text-lg text-gray-600 text-center">{userStat[searchStat.player1].userName}</p>
                            </div>
                        </div>
                        <div className="place-self-center my-4">
                            <Chip color="primary" className="self-center shadow-medium mx-1" size='md' variant="flat">NO.10</Chip>
                        </div>
                    </div>
                </CardBody>
                :null}
                {searched
                ?resultContent
                :null}
            </Card>
        </div>
    )
}

export default PH2h