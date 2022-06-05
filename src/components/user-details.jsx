import { useContext, useEffect } from "react";
import { getUserDetails } from "../actions";
import { usersContext } from "../context";
import { VStack, Box, Divider,Text, Heading, AspectRatio, Image, Center, HStack, Stack, NativeBaseProvider } from 'native-base';
export const UserDetails = ({ route }) => {
  const { id } = route.params;

  const resolve = async () => {
    dispatch(await getUserDetails(id));
  };
  useEffect(() => {
    if (id) resolve();

    return () => dispatch({ type: "CLEAR" });
  }, []);
  const { state, dispatch } = useContext(usersContext);
  const user = state.users.details;

  if (!user) return <Text>Loading ...</Text>;
  return (
    <Box alignItems="center">       
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            {user.name}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "blue.500"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Client Details:
            </Text>
          </Stack>
          <Text fontWeight="400">
          Email: {user.email}
          </Text>
          <Text fontWeight="400">
          Phone: {user.phone}
          </Text>
          <Text fontWeight="400">
          Website: {user.website}
          </Text>
        </Stack>
      </Box>
    
  );
};
