import { Heading, VStack, SectionList, Text, useToast } from "native-base";
import { ScreenHeader } from "../components/ScreenHeader";
import { HistoryCard } from "../components/HistoryCard";
import { useCallback, useEffect, useState } from "react";
import { AppError } from "../utils/AppError";
import { api } from "../services/api";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryByDayDTO } from "../dtos/HistoeyByDay";

export function History() {
  const [exercises, setExercices] = useState<HistoryByDayDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();

  async function fetchHistory() {
    try {
      setIsLoading(true);
      const { data } = await api.get("/history");
      setExercices(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregas o histórico";
      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(true);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryCard data={item} />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
            fontFamily="heading"
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {"\n"} Vamos fazer exercícios
            hoje ?
          </Text>
        )}
      />
    </VStack>
  );
}
