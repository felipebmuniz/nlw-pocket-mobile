import { Text, View } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";

import { router } from "expo-router";

import { s } from "./styles";
import { Button } from "@/components/button";

export type PropsDetails = {
  address: string;
  categoryId: string;
  coupons: number;
  cover: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  rules: Rule[];
};

type Rule = {
  description: string;
  id: string;
  marketId: string;
};

type Props = {
  data: PropsDetails;
};

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{data.name}</Text>
      <Text style={s.description}>{data.description}</Text>

      <View style={s.group}>
        <Text style={s.title}>Informações</Text>
      </View>
    </View>
  );
}
