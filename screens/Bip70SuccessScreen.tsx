import React from "react";
import styled from "styled-components";
import { ScrollView, SafeAreaView, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Button, T, H1, Spacer } from "../atoms";

const ScreenCover = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.primary500};
  padding: 0 16px;
`;

const TopArea = styled(View)``;

const BottomArea = styled(View)``;
const ReceiptArea = styled(View)`
  flex: 1;
  justify-content: center;
`;

type Props = NavigationScreenProps & {
  route: {
    params: {
      txid: string;
    };
  };
};

const Bip70SuccessScreen = ({ navigation, route }: Props) => {
  const { txid } = route.params;
  return (
    <ScreenCover>
      <SafeAreaView
        style={{
          height: "100%"
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <TopArea>
            <Spacer />
            <H1 center type="inverse" weight="bold">
              Success!
            </H1>
            <Spacer tiny />
            <T size="large" type="inverse" center>
              Payment sent to merchant
            </T>
          </TopArea>
          <ReceiptArea>
            <T center type="inverse">
              <FontAwesome name="check-circle" size={96} />
            </T>
            <Spacer />
            <T center type="inverse" size="small" monospace>
              Transaction ID
            </T>
            <Spacer tiny />
            <T center type="inverse" size="small" monospace>
              {txid}
            </T>
          </ReceiptArea>
          <BottomArea>
            <Spacer small />
            <Button
              nature="inverse"
              style={{
                marginLeft: 8,
                marginRight: 8
              }}
              onPress={() => navigation.navigate("Home")}
              text="Finish"
            />
            <Spacer small />
          </BottomArea>
        </ScrollView>
      </SafeAreaView>
    </ScreenCover>
  );
};

export default Bip70SuccessScreen;
