import React from "react";
import { Card, CardBody, CardHeader, Image, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User } from "@nextui-org/react";
import CSwiper from "../components/swiper";

const PHome: React.FC = () => {

  const swiperProps = {
    slidesPerView: 2,
    pictures: [
      "../../../static/avatar1.jpg",
      "../../../static/avatar2.jpg",
      "../../../static/avatar3.jpg",
    ],
    titles: [
      "2022年法网",
      "2022年温网",
      "2022年美网",
    ],
    subtitles: [
      "2022年法国网球公开赛",
      "2022年温布尔登网球锦标赛",
      "2022年美国网球公开赛",
    ],
  }
  return (
    <div className="flex items-start justify-center flex-wrap">
      <Card className="h-[300px] w-[600px] m-8 min-w-[600px]">
        <CSwiper {...swiperProps}/>
      </Card>
      <Card className="h-[300px] aspect-video m-8 min-w-[600px]">
        <CardHeader>
          <p className="text-tiny text-black/60 uppercase font-bold">排名总览</p>
        </CardHeader>
        <CardBody>
          <Table removeWrapper>
            <TableHeader>
              <TableColumn>单打</TableColumn>
              <TableColumn>双打</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <User name="花滑女王水痘" description="中国" avatarProps={{ src: "../../../static/avatar1.jpg" }}/>
                </TableCell>
                <TableCell>
                  <User name="花滑女王水痘" description="中国" avatarProps={{ src: "../../../static/avatar1.jpg" }}/>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <User name="花滑女王水痘" description="中国" avatarProps={{ src: "../../../static/avatar1.jpg" }}/>
                </TableCell>
                <TableCell>
                  <User name="花滑女王水痘" description="中国" avatarProps={{ src: "../../../static/avatar1.jpg" }}/>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <User name="花滑女王水痘" description="中国" avatarProps={{ src: "../../../static/avatar1.jpg" }}/>
                </TableCell>
                <TableCell>
                  <User name="花滑女王水痘" description="中国" avatarProps={{ src: "../../../static/avatar1.jpg" }}/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
      <Card className=" m-8 max-w-[1264px]">
        <CardBody>
          <div className="flex items-center justify-center">
            <div className="px-10">
              <Image className="object-cover" src="../../../static/pkslogo.jpg" alt="Image" />
            </div>
            <div>
              <h2 className='text-large font-semibold'>欢迎来到吧友PK赛！</h2>
              <p>吧友PK赛由ED小童鞋一手创办,四大满贯赛事主办权及管理权暂时归他所有。</p>
              <p>随着对PK赛热情的不断提高，越来越多的人加入进来，吧友们参赛意愿的不断提高，仅仅四大满贯无法满足吧友的参赛需求。2022年6月，自由人单丹娜创立巡回赛，将比赛体系与规模进一步完善，紧接着披头散发女士、彩虹女士接连加入，支持我们的PK赛。</p>
              <p>随着单打体系的日趋完备，双打也提上了日程，披头散发首创双打赛事，并由高亭宇x任子威推广开来，形成了现如今PK赛的一个运行模式。</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default PHome;