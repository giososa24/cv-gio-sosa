export type DrawerProps = {
  isOpen: boolean
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}
