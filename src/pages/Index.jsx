import React from "react";
import { Box, Flex, Text, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, useColorModeValue } from "@chakra-ui/react";
import { FaUsers, FaRegChartBar, FaDollarSign, FaClipboardList } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Business Dashboard
      </Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {/* User Stats */}
        <Box p={6} boxShadow="md" bg={cardBg} borderRadius="lg">
          <Stat>
            <StatLabel display="flex" alignItems="center">
              <FaUsers />
              <Text ml={2}>Users</Text>
            </StatLabel>
            <StatNumber>1,234</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </Box>

        {/* Revenue Stats */}
        <Box p={6} boxShadow="md" bg={cardBg} borderRadius="lg">
          <Stat>
            <StatLabel display="flex" alignItems="center">
              <FaDollarSign />
              <Text ml={2}>Revenue</Text>
            </StatLabel>
            <StatNumber>$50,340</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              5.42%
            </StatHelpText>
          </Stat>
        </Box>

        {/* Sales Stats */}
        <Box p={6} boxShadow="md" bg={cardBg} borderRadius="lg">
          <Stat>
            <StatLabel display="flex" alignItems="center">
              <FaRegChartBar />
              <Text ml={2}>Sales</Text>
            </StatLabel>
            <StatNumber>684</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              1.10%
            </StatHelpText>
          </Stat>
        </Box>

        {/* Tasks Stats */}
        <Box p={6} boxShadow="md" bg={cardBg} borderRadius="lg">
          <Stat>
            <StatLabel display="flex" alignItems="center">
              <FaClipboardList />
              <Text ml={2}>Tasks</Text>
            </StatLabel>
            <StatNumber>50/100</StatNumber>
            <StatHelpText>Progress</StatHelpText>
          </Stat>
        </Box>
      </SimpleGrid>

      <Flex mt={10} justifyContent="space-between">
        <Box boxShadow="md" bg={cardBg} borderRadius="lg" p={6} flex="1" mr={5}>
          <Text mb={4} fontWeight="bold">
            Recent Activities
          </Text>
          {/* Activities List */}
          {/* Replace https://images.unsplash.com/photo-1520156557489-31c63271fcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY3Rpdml0eXxlbnwwfHx8fDE3MTA0OTA0NDh8MA&ixlib=rb-4.0.3&q=80&w=1080 with an actual image URL */}
          <Image src="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxhY3Rpdml0eXxlbnwwfHx8fDE3MTA0OTA0NDh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>

        <Box boxShadow="md" bg={cardBg} borderRadius="lg" p={6} flex="1">
          <Text mb={4} fontWeight="bold">
            Performance
          </Text>
          {/* Performance Chart */}
          {/* Replace https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGNoYXJ0fGVufDB8fHx8MTcxMDQ5MDQ0OHww&ixlib=rb-4.0.3&q=80&w=1080 with an actual image URL */}
          <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwZXJmb3JtYW5jZSUyMGNoYXJ0fGVufDB8fHx8MTcxMDQ5MDQ0OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
