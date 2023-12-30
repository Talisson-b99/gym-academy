import { useState } from "react";
import { HStack, VStack, FlatList, Heading, Text } from "native-base";

import { Group } from "../components/Group";
import { HomeHeader } from "../components/HomeHeader";
import { ExerciseCard } from "../components/ExerciseCard";

export function Home() {
  const [groups, setGroups] = useState(["costa", "ombro", "bíceps", "tríceps"]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ marginBottom: 20 }}
          renderItem={({ item }) => <ExerciseCard />}
        />
      </VStack>
    </VStack>
  );
}
