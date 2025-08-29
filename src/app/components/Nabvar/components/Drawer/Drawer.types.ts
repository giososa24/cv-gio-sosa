type DrawerProps = {
  isOpen: boolean
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export type MenuItemsType = {
  label: string
  icon: 'home' | 'account_circle' | 'email'
  href: string
}

export default DrawerProps
