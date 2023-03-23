import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      height="100vh"
      width="100vw"
      background="#004DB3"
      backgroundImage={{
        base: '/assets/Minimal-Pattern-1-D-mobile.svg',
        sm: '/assets/Minimal-Pattern-1-D-mobile.svg',
        md: '/assets/Minimal-Pattern-1-D-mobile.svg',
        lg: '/assets/Minimal-Pattern-1-D-desktop.svg',
        xl: '/assets/Minimal-Pattern-1-D-desktop.svg',
        '2xl': '/assets/Minimal-Pattern-1-D-desktop.svg',
      }}
      backgroundSize="cover"
    >
      <NavBar />
      <main>{children}</main>
    </Box>
  );
}
