import { MdSportsFootball, MdBatchPrediction, MdGroup, MdAccountCircle, MdSettings, MdLogout, MdLogin } from 'react-icons/md'
import NavbarIcon from './NavbarIcon'

export default function Navbar () {
  const session = false
  return (
    <nav className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-neutral text-white shadow-lg'>
      <NavbarIcon {...iconProps.homeIconProps} />
      <NavbarIcon {...iconProps.groupsIconProps} />

      {/* {session &&
        <>
          <NavbarIcon {...iconProps.betsIconProps} />
          <NavbarIcon {...iconProps.preferencesIconProps} />
          <NavbarIcon {...iconProps.accountIconProps} />
          <NavbarIcon {...iconProps.signOutIconProps} />
        </>
      }
*/}
      {!session &&
        <NavbarIcon {...iconProps.signInIconProps} />
      }
    </nav>
  )
}

const iconSize = 26
const iconProps = {
  homeIconProps: {
    icon: <MdSportsFootball size={iconSize} />,
    tooltip: 'Home',
    link: '/'
  },
  groupsIconProps: {
    icon: <MdGroup size={iconSize} />,
    tooltip: 'Groups',
    link: '/groups'
  },
  betsIconProps: {
    icon: <MdBatchPrediction size={iconSize} />,
    tooltip: 'Bets',
    link: '/bets'
  },
  preferencesIconProps: {
    icon: <MdSettings size={iconSize} />,
    tooltip: 'Preferences',
    link: '/preferences',
    additionalClassNames: 'mt-auto'
  },
  accountIconProps: {
    icon: <MdAccountCircle size={iconSize} />,
    tooltip: 'Account',
    link: '/account'
  },
  signOutIconProps: {
    icon: <MdLogout size={iconSize} />,
    tooltip: 'Sign Out',
    link: '/error'
    // additionalAction: signOut
  },
  signInIconProps: {
    icon: <MdLogin size={iconSize} />,
    tooltip: 'Sign In',
    link: '/error',
    additionalLinks: ['/sign-in', '/verify-email'],
    // additionalAction: signIn,
    mtAuto: true
  }
}
