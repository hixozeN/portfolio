import { GridItem, Link, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Biography = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="85%" spacing="12px">
      <Text className="text">
        Впервые я столкнулся с веб-разработкой еще в далеком 2007 году, тогда я
        открыл и начал экспериментировать в MS FrontPage 😃
      </Text>
      <Text className="text">
        Шли годы и на замену FrontPage пришли php, mysql, pawn, которых мне было
        вполне достаточно, чтобы поддерживать свои хобби (игровые проекты) в
        рабочем и функционирующем состоянии. Тогда я даже не задумывался в серьез, чтобы связать хобби и работу.
      </Text>
      <Text className="text">
        Мой текущий стэк: HTML5, CSS3, JS Native, React, Redux, TS.
      </Text>
      <Text className="text">
        Параллельно с фронтом познаю бэк: NodeJS, Express, Mongo, MySQL,
        PostgreSQL.
      </Text>
      <Text className="text">
        Подробнее можно посмотреть мои проекты на&nbsp;
        <strong style={{ color: secondary }}>
          <Link href="https://github.com/hixozeN" isExternal>
            ГитХабе.
          </Link>
        </strong>
      </Text>
    </VStack>
  </GridItem>
);

export default Biography;
