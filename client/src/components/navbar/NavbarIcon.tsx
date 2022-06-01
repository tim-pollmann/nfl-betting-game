interface IIconProps {
  icon: JSX.Element,
  tooltip: string,
  link: string,
  additionalLinks?: string[],
  additionalAction?: () => Promise<undefined>
  mtAuto?: boolean,
}

export default function NavbarIcon (props: IIconProps) {
  const { icon, tooltip, mtAuto } = props
  // link, additionalAction, additionalLinks, additionalClassNames
  // const onClick = () => { additionalAction ? additionalAction() : router.push(link) }
  // const active = (router.pathname === link || additionalLinks?.includes(router.pathname)) ? 'navbar-icon-active' : ''

  const active = false
  return (
    // ${active} ${additionalClassNames}onClick={onClick}
    <div className={`relative flex items-center justify-center h-12 w-12 ${mtAuto ? 'mt-auto' : 'mt-2'} mb-2 mx-auto bg-neutralDark text-primary rounded-3xl hover:bg-primaryDark hover:rounded-xl transition-all duration-200 ease-linear group ${active && 'bg-neutralDark rounded-xl'}`} >
      <>
        {icon}
        <span className='absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
          {tooltip}
        </span>
      </>
    </div >
  )
}
