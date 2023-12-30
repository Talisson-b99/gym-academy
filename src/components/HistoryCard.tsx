import { HStack, Heading, Stack, Text } from "native-base";

export function HistoryCard() {
  return (
    <HStack
      bg="gray.600"
      w="full"
      px={5}
      py={4}
      mb={3}
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack mr={5}>
        <Heading color="white" fontSize="md" textTransform="capitalize">
          Costas
        </Heading>
        <Text color="gray.100" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </Stack>
      <Text color="gray.300" fontSize="md">
        08:56
      </Text>
    </HStack>
  );
}
