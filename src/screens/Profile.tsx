import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from "native-base";

import { ScreenHeader } from "../components/ScreenHeader";
import { UserPhoto } from "../components/UserPhoto";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ marginBottom: 36 }}>
        <Center mt={10} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/Talissonb.png" }}
              alt="Imagem do usuário"
              size={PHOTO_SIZE}
              resizeMode="center"
            />
          )}
          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="gray.600" />
          <Input value="Talisson@gmail.com" bg="gray.600" isDisabled />
        </Center>
        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
          <Input placeholder="Senha antiga" secureTextEntry bg="gray.600" />
          <Input placeholder="Nova Senha" secureTextEntry bg="gray.600" />
          <Input
            placeholder="Confirme a nova senha"
            secureTextEntry
            bg="gray.600"
          />
          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
