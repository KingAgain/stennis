import React from "react";
import { Button, Card, CardBody, Image, Link, Tab, Tabs, User } from "@nextui-org/react"

interface TDrawProps {
    drawSize: number;
    drawInfo: string[][][];
}

const PDraw: React.FC = () => {
    const tournamentStat = {
        "drawSize": 16,
        "location": "帕勒莫",
        "country": "意大利",
        "date": "2024-07-15 ~ 2024-07-21",
        "singleHost": "WillKris锴",
        "doubleHost": "大嘴丽丽",
        "logo": "../../../static/WTA250.png",
        "surface": "clay",
        "signUpUrl": "#",
        "forumUrl": "#",
    }

    const surfacePic: { [key: string]: string } = {
        'grass': '../../../static/tournament-grass.jpg',
        'clay': '../../../static/tournament-clay.jpg',
        'hard': '../../../static/tournament-hard.jpg',
    }

    const matches = [
        { "player1": "花滑女王水痘", "player2": "雨子成说", "round": 1, "score": "1-13 13-12 13-12", "drawPos": 1, "winner": "花滑女王水痘", "note1": "1", "note2": ""},
        { "player1": "活宝哈u", "player2": "数字南", "round": 1, "score": "13-12 13-12", "drawPos": 3, "winner": "活宝哈u", "note1": "Q", "note2": ""},
        { "player1": "花滑女王水痘", "player2": "活宝哈u", "round": 2, "score": "13-12 13-12", "drawPos": 1, "winner": "花滑女王水痘", "note1": "1", "note2": "Q "},
        ]
        const userStat: { [key: string]: { nickname: string; userName: string; avatarSrc: string; } } = React.useMemo(() => ({
            "花滑女王水痘": { "nickname": "花滑女王水痘", "userName": "因你痴心不改", "avatarSrc": "../../../static/avatar1.jpg" },
            "活宝哈u": { "nickname": "活宝哈u", "userName": "活宝哈u", "avatarSrc": "../../../static/avatar2.jpg" },
            "雨子成说": { "nickname": "雨子成说", "userName": "雨子成说", "avatarSrc": "../../../static/avatar3.jpg" },
            "数字南": { "nickname": "数字南", "userName": "数字南", "avatarSrc": "../../../static/avatar4.jpg" },
        }), []);

    const drawInfo = Array.from({ length: Math.log2(tournamentStat.drawSize) + 1 }, () => Array(tournamentStat.drawSize).fill([]));
    for (const match of matches) {
        const player1pos = match.drawPos - 1;
        const player1note = match.note1=== "" ? "" : `[${match.note1}]`;
        const player2pos = match.drawPos + Math.pow(2, match.round - 1) - 1;
        const player2note = match.note2=== "" ? "" : `[${match.note2}]`;
        drawInfo[match.round-1][player1pos] = ['user', player1note+userStat[match.player1].nickname, userStat[match.player1].userName, userStat[match.player1].avatarSrc]; 
        drawInfo[match.round-1][player2pos] = ['user', player2note+userStat[match.player2].nickname, userStat[match.player2].userName, userStat[match.player2].avatarSrc];
        if(match.winner == match.player1){
            drawInfo[match.round][Math.floor((player1pos+player2pos)/2)] = ['user', player1note+userStat[match.player1].nickname, userStat[match.player1].userName, userStat[match.player1].avatarSrc];
            drawInfo[match.round][Math.floor((player1pos+player2pos)/2)+1] = ['score', match.score];
        }
        else{
            drawInfo[match.round][Math.floor((player1pos+player2pos)/2)] = ['user', player2note+userStat[match.player2].nickname, userStat[match.player2].userName, userStat[match.player2].avatarSrc];
            drawInfo[match.round][Math.floor((player1pos+player2pos)/2)+1] = ['score', match.score];
        }
        console.log(drawInfo);
    }
    const drawProps = {
        drawSize: tournamentStat.drawSize,
        drawInfo: drawInfo,
    }
    const CDraw: React.FC<TDrawProps> = (props) => {
        const drawCells = [];
        for (let i = 0; i <= Math.log2(drawProps.drawSize); i++) {
            const roundCells = [];
            for (let j = 0; j < drawProps.drawSize; j++) {
                let className: string = "rounded-none p-1";
                if (i == 0 || (Math.floor((j + Math.pow(2, i - 1)) / Math.pow(2, i)) % 2 == 1 && i != Math.log2(drawProps.drawSize))) {
                    className += " border-r-2";
                }
                if (i == 0 && (j % 2 == 0) || j % Math.pow(2, i) == Math.pow(2, i - 1)) {
                    className += " border-t-2";
                }
                if (i == 0 && j + 1 == drawProps.drawSize) {
                    className += " border-b-2";
                }
                if (drawProps.drawInfo[i][j].length <= 1) {
                    roundCells.push(<div className={`${className}`}></div>);
                }
                else {
                    if (drawProps.drawInfo[i][j][0] == 'user') {
                        roundCells.push(
                            <User
                                name={drawProps.drawInfo[i][j][1]}
                                description={drawProps.drawInfo[i][j][2]}
                                avatarProps={{ src: drawProps.drawInfo[i][j][3], size: 'sm', radius: 'sm', className: "w-6 h-6 text-tiny" }}
                                className={`${className} justify-start`}
                            />
                        );
                    }
                    else if (drawProps.drawInfo[i][j][0] == 'users') {
                        roundCells.push(
                            <div className={`${className} flex flex-col`}>
                                <User
                                    name={drawProps.drawInfo[i][j][1]}
                                    description={drawProps.drawInfo[i][j][2]}
                                    avatarProps={{ src: drawProps.drawInfo[i][j][3], size: 'sm', radius: 'sm', className: "w-6 h-6 text-tiny" }}
                                    className={`justify-start`}
                                />
                                <User
                                    name={drawProps.drawInfo[i][j][4]}
                                    description={drawProps.drawInfo[i][j][5]}
                                    avatarProps={{ src: drawProps.drawInfo[i][j][6], size: 'sm', radius: 'sm', className: "w-6 h-6 text-tiny" }}
                                    className={`justify-start`}
                                />
                            </div>
                        );

                    }
                    else {
                        roundCells.push(
                            <div className={`${className}`}>
                                <p className="text-sm">{drawProps.drawInfo[i][j][1]}</p>
                            </div>
                        );
                    }
                }
            }
            drawCells.push(roundCells);
        }
        return (
            <div className={`grid grid-rows-16 grid-cols-drawcols16 grid-flow-col`}>
                {Array.from({ length: props.drawSize }, (_, index) => (
                    <p className="self-center text-center" key={index}>
                        {index + 1}
                    </p>
                ))}
                {drawCells}
            </div>
        )
    }
    return (
        <div className="justify-center m-8 flex flex-col">
            <Card className="self-center shadow-medium max-h-[40vh] max-w-[80vw]" isFooterBlurred>
                <CardBody className="overflow-visible p-0 grid grid-cols-2 w-full">
                    <div className="m-2 flex flex-col">
                        <div className="flex justify-around place-self-center items-center row-span-2 mt-10 mb-6">
                            <Image src='../../../static/WTA250.png' height={60} width={60} />
                            <div className="flex flex-col px-2">
                                <h5 className="text-2xl text-black font-bold text-center">{tournamentStat.location}</h5>
                                <p className="text-lg text-gray-600 text-center">{tournamentStat.country}</p>
                            </div>
                        </div>
                        <div className="place-self-center my-4">
                            <p className="text-md text-gray-600 py-1 text-center">{tournamentStat.date}</p>
                            <p className="text-sm text-gray-600 py-1 text-center">{tournamentStat.singleHost} {tournamentStat.doubleHost}</p>
                        </div>
                        <div className="place-self-center my-4">
                            <Button className="mx-6" color="default" variant="flat" as={Link} href={tournamentStat.signUpUrl}>报名</Button>
                            <Button className="mx-6" color="default" variant="flat" as={Link} href={tournamentStat.forumUrl}>官帖</Button>
                        </div>
                    </div>
                    <Image className="object-cover aspect-[2] flex-1" src={surfacePic[tournamentStat.surface]} radius="none" />
                </CardBody>
            </Card>
            <Card className="my-8 self-center w-full min-h-[40vh] max-w-[80vw]">
                <Tabs className="mx-auto shadow-medium rounded-xl my-4" color="primary" variant="underlined">
                    <Tab title='单打'>
                        <CDraw {...drawProps} />
                    </Tab>
                    {/* <Tab title='双打'>
                        <CDraw {...drawProps} />
                    </Tab> */}
                    {/* <Tab title='单打Q'></Tab> */}
                    {/* <Tab title='双打Q'></Tab> */}
                    {/* <Tab title='积分'></Tab> */}
                </Tabs>
            </Card>
        </div>
    );
}

export default PDraw;