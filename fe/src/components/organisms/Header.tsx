import 'twin.macro'
import { useContext, useCallback } from 'react'
import { Button } from 'src/components/atoms/Buttons/Buttons'
// import { Tab } from 'src/components/organisms/Tab';
// import { Modal } from 'src/components/organisms/modal/Modal'
// import {
//   ModalContext,
//   useModalDispatchContext,
// } from 'src/contexts/ModalContextProvider'
// import { RiUserSettingsFill } from 'react-icons/ri'

export const Header = () => {
  // const context = useContext(ModalContext)
  // const modalDispatch = useModalDispatchContext()
  // const showMember = useCallback(() => modalDispatch({ type: 'account' }), [])

  return (
    <header tw="flex items-center py-4 px-14 w-full h-16 fixed bg-white z-10">
      <div
        tw="flex items-center font-black text-green40 cursor-pointer"
        onClick={() => console.log('Click Logo')}
      >
        oshizukani
      </div>
      {/* TODO: Tab機能は将来的に必要になったら入れる */}
      {/* <div className="mx-auto">
        <Tab />
      </div> */}
      <div tw="ml-auto">
        <div tw="flex items-center cursor-pointer">
          <Button
            type="green"
            title="ログイン"
            onClick={() => console.log('Login')}
          />

          {/* {auth ? (
            <RiUserSettingsFill
              className="fill-current text-gray40 transition hover:text-lightGreen"
              onClick={showMember}
              size={25}
            />
          ) : (
            <Button title="ログイン" onClick={() => console.log('Login')} />
          )} */}
          {/* {context.visible && <Modal />} */}
        </div>
      </div>
    </header>
  )
}
