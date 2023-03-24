import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box position="absolute">
      <NavBar />
      <main>{children}</main>
    </Box>
  );
}
