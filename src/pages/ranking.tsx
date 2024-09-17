import React from 'react'
import { Button, Dropdown, DropdownMenu, Input, Pagination, Selection, SortDescriptor, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tabs, Tab, User, DropdownItem, DropdownTrigger } from "@nextui-org/react";
import ChevronDown from '../../static/icons.tsx'


const PRank: React.FC = () => {
    const [filterValue, setFilterValue] = React.useState("");
    const [countriesFilter, setCountriesFilter] = React.useState<Selection>(new Set(["中国"]));
    const [colomnsFilter, setColumnsFilter] = React.useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "acurRanking",
        direction: "ascending",
    });

    const srankStat = React.useMemo(() => [
        { "curRanking": 1, "lastRanking": 17, "Move": 15, "player": "因你痴心不改", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 2, "lastRanking": 17, "Move": 15, "player": "雨子成说", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 3, "lastRanking": 17, "Move": 15, "player": "因你痴心不改2", "country": "外国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 4, "lastRanking": 17, "Move": 15, "player": "因你痴心不改3", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 5, "lastRanking": 17, "Move": 15, "player": "因你痴心不改4", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 6, "lastRanking": 17, "Move": 15, "player": "因你痴心不改5", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 7, "lastRanking": 17, "Move": 15, "player": "因你痴心不改6", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 8, "lastRanking": 17, "Move": 15, "player": "因你痴心不改7", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 9, "lastRanking": 17, "Move": 15, "player": "因你痴心不改8", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 10, "lastRanking": 17, "Move": 15, "player": "因你痴心不改9", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 11, "lastRanking": 17, "Move": 15, "player": "因你痴心不改0", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 12, "lastRanking": 17, "Move": 15, "player": "因你痴心不改1", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
    ], []);

    const sraceStat = React.useMemo(() => [
        { "curRanking": 1, "lastRanking": 1, "Move": 15, "player": "因你痴心不改", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 2, "lastRanking": 1, "Move": 15, "player": "雨子成说", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 3, "lastRanking": 1, "Move": 15, "player": "因你痴心不改2", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 4, "lastRanking": 1, "Move": 15, "player": "因你痴心不改3", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 5, "lastRanking": 1, "Move": 15, "player": "因你痴心不改4", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 6, "lastRanking": 1, "Move": 15, "player": "因你痴心不改5", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 7, "lastRanking": 1, "Move": 15, "player": "因你痴心不改6", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 8, "lastRanking": 1, "Move": 15, "player": "因你痴心不改7", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 9, "lastRanking": 1, "Move": 15, "player": "因你痴心不改8", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 10, "lastRanking": 1, "Move": 15, "player": "因你痴心不改9", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 11, "lastRanking": 1, "Move": 15, "player": "因你痴心不改0", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 12, "lastRanking": 1, "Move": 15, "player": "因你痴心不改1", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
    ], []);

    
    const drankStat = React.useMemo(() => [
        { "curRanking": 1, "lastRanking": 1, "Move": 15, "player": "因你痴心不改", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
        { "curRanking": 2, "lastRanking": 1, "Move": 15, "player": "雨子成说", "country": "中国", "totalPoints": 4583, "18thPoint": 65, "Plays": 37, "Titles": 6 },
    ], []);

    const [rankingStat,setRankingStat] = React.useState(srankStat)

    const userStat: { [key: string]: { nickname: string; userName: string; avatarSrc: string; } } = React.useMemo(() => ({
        "因你痴心不改": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改0": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改1": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改2": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改3": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改4": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改5": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改6": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改7": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改8": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "因你痴心不改9": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
        "雨子成说": { "nickname": "雨子成说", "userName": "雨子成说", "avatarSrc": "../../../static/avatar3.jpg" },
    }), []);
    type Player = typeof rankingStat[0];
    const colomns: { [key: string]: { Chinese: string } } = React.useMemo(() => ({
        "curRanking": {
            "Chinese": "当前排名",
        },
        "lastRanking": {
            "Chinese": "上次排名",
        },
        "Move": {
            "Chinese": "变动",
        },
        "player": {
            "Chinese": "选手",
        },
        "country": {
            "Chinese": "协会",
        },
        "totalPoints": {
            "Chinese": "总积分",
        },
        "18thPoint": {
            "Chinese": "起计分",
        },
        "Plays": {
            "Chinese": "参赛场次",
        },
        "Titles": {
            "Chinese": "冠军数",
        },
    }), []);


    const countriesOptions = React.useMemo(() => {
        const countries = rankingStat.map(stat => stat.country);
        countries.push("全部");
        return [...new Set(countries)];
    }, [rankingStat]);

    const rankingColumns = React.useMemo(() => {
        const columns = Object.keys(rankingStat[0]);
        return columns;
    }, [rankingStat]);

    const staticColumns = React.useMemo(() => ["curRanking", "player", "totalPoints"], []);

    const columnsOptions = React.useMemo(() => {
        return rankingColumns.filter(column => !staticColumns.includes(column));
    }, [rankingColumns, staticColumns]);




    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const filteredPlayers = React.useMemo(() => {
        let filteredStats = [...rankingStat]
        if (hasSearchFilter) {
            filteredStats = filteredStats.filter((stat) => {
                stat.player.toLowerCase().includes(filterValue.toLowerCase())
            })
        }
        if (countriesFilter instanceof Set && !countriesFilter.has("全部")) {
            filteredStats = filteredStats.filter((stat) =>
                Array.from(countriesFilter).includes(stat.country)
            );
        }
        return filteredStats
    }, [hasSearchFilter, rankingStat, filterValue, countriesFilter]
    )
    const pages = Math.ceil(filteredPlayers.length / rowsPerPage);

    const sortedPlayers = React.useMemo(() => {
        return [...filteredPlayers].sort((a: Player, b: Player) => {
            const first = a[sortDescriptor.column as keyof Player] as number;
            const second = b[sortDescriptor.column as keyof Player] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, filteredPlayers]);

    const players = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return sortedPlayers.slice(start, end);
    }, [page, sortedPlayers, rowsPerPage]);

    const filteredColumns = React.useMemo(() => {
        const columns = [];
        if (colomnsFilter === "all") {
            return rankingColumns;
        }
        const colomnsFilterArray = Array.from(colomnsFilter);
        for (const column of rankingColumns) {
            if (colomnsFilterArray.includes(column) || staticColumns.includes(column)) {
                columns.push(column);
            }
        }
        return columns;
    }, [colomnsFilter, rankingColumns, staticColumns]
    )

    const handleTabSelection = (key: React.Key) => {
        switch(key){
            case 'srank':
                setRankingStat(srankStat)
                return
            case 'drank':
                setRankingStat(drankStat)
                return
            case 'srace':
                setRankingStat(sraceStat)
        }
    };

    const renderCell = React.useCallback((item: Player, columnKey: React.Key) => {
        const cellValue = item[columnKey as keyof Player];
        if (columnKey === "player") {
            return <User name={userStat[cellValue].nickname} description={userStat[cellValue].userName} avatarProps={{ src: userStat[cellValue].avatarSrc }} />
        }
        return <p>{cellValue}</p>
    }, [userStat]);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const headContent = React.useMemo(() => {
        const icons = {
            chevron: <ChevronDown fill="currentColor" size={16} />,
        }
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input isClearable className="w-full sm:max-w-[44%]" placeholder="搜索选手" value={filterValue} onClear={() => onClear()} onValueChange={onSearchChange} />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button variant="flat" endContent={icons.chevron}>
                                    {(countriesFilter instanceof Set && !countriesFilter.has("全部")) ? Array.from(countriesFilter) : "国籍"}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu disallowEmptySelection selectedKeys={countriesFilter} selectionMode="single" onSelectionChange={setCountriesFilter}>
                                {countriesOptions.map((country) => (
                                    <DropdownItem key={country}>{country}</DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button variant="flat" endContent={icons.chevron}>
                                    列
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu closeOnSelect={false} selectedKeys={colomnsFilter} selectionMode="multiple" onSelectionChange={setColumnsFilter}>
                                {columnsOptions.map((column) => (
                                    <DropdownItem key={column}>{colomns[column].Chinese}</DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">选手总数: {rankingStat.length}</span>
                    <label className="flex items-center text-default-400 text-small">
                        每页显示条数:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }, [colomns, filterValue, onSearchChange, countriesFilter, countriesOptions, colomnsFilter, columnsOptions, rankingStat.length, onRowsPerPageChange, onClear])

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-center items-center">
                <Pagination isCompact showControls showShadow color="primary" page={page} total={pages} onChange={setPage} />
            </div>
        )
    }, [page, pages]
    )

    return (
        <div className="justify-center m-8 flex flex-col">
            <Tabs className='mx-auto shadow-medium rounded-lg' color='primary' variant='underlined' onSelectionChange={handleTabSelection}>
                <Tab title='单打官方排名' key='srank' />
                <Tab title='双打官方排名' key='drank' />
                <Tab title='单打冠军排名' key='srace' />
            </Tabs>
            <div className='minw-[100%]' />
            <Table className='mx-auto my-8 w-[80vw] rounded-xl' isStriped topContent={headContent} bottomContent={bottomContent} shadow='md' sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                <TableHeader>
                    {filteredColumns.map((column) => (
                        <TableColumn key={column} allowsSorting={true}>{colomns[column].Chinese}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody emptyContent={"No users found"} items={players}>
                    {players.map((item) => (
                        <TableRow key={item.player}>
                            {Object.keys(item).filter((key) => filteredColumns.includes(key)).map((key) => (
                                <TableCell key={key}>{renderCell(item, key)}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default PRank