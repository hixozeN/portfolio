import { GridItem, Link, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Biography = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="85%" spacing="12px">
      <Text className="text">
        Впервые я столкнулся с веб-разработкой еще в далеком 2007 году. Долгое
        время это было не более чем хобби...
      </Text>
      <Text className="text">
        Время от времени я возвращался к этому, но серьезно переплести свою
        жизнь с этим хобби решился только в 2022 году.
      </Text>
      <Text className="text">
        Мой текущий стэк: JS Native, React, Redux, TS. Параллельно с фронтом
        познаю бэк: NodeJS, Express, Mongo, MySQL, PostgreSQL.
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
