import language_icon from "../../../public/svg/language.svg"
import user_icon from "../../../public/svg/user.svg"
import general from "../../../public/svg/general.svg"
import font from "../../../public/svg/font.svg"
import font_2 from "../../../public/svg/font-2.svg"
import mode from "../../../public/svg/mode.svg"
import Picture from '../Picture/Picture'

const Settings = () => {
    return (
        <div>
            <div className="justify-end flex mb-6">
                <Picture image={user_icon} width={60} height={60}></Picture>
            </div>
            <div className='border bg-white rounded-xl p-4 grid gap-4 pb-60'>
                <h2 className='text-xl font-bold text-sixth-100 text-center'>Settings</h2>
                <div className='flex items-center bg-first-300 w-72 p-3 rounded-lg cursor-pointer'>
                    <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center'>
                        <Picture image={language_icon} width={20} height={20}></Picture>
                    </div>
                    <h2 className='text-first-200 font-normal text-base ml-3'>Language Settings</h2>
                </div>
                <div className='flex items-center bg-first-300 w-72 p-3 rounded-lg cursor-pointer'>
                    <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center'>
                        <Picture image={general} width={20} height={20}></Picture>
                    </div>
                    <h2 className='text-first-200 font-normal text-base ml-3'>General Settings</h2>
                </div>
                <div className='flex items-center bg-first-300 w-72 p-3 rounded-lg cursor-pointer'>
                    <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center'>
                        <Picture image={font} width={20} height={20}></Picture>
                    </div>
                    <h2 className='text-first-200 font-normal text-base ml-3'>Font Settings</h2>
                </div>
                <div className='flex items-center bg-first-300 w-72 p-3 rounded-lg border-s-4 border-second-100 cursor-pointer'>
                    <div className='bg-first-100 p-2.5 rounded-full h-10 w-10 flex justify-center items-center'>
                        <Picture image={font_2} width={20} height={20}></Picture>
                    </div>
                    <h2 className='text-second-100 font-normal text-base ml-3'>Appearance Settings</h2>
                </div>
                <div className="border rounded flex items-center justify-between p-3 cursor-pointer">
                    <h2 className="text-sixth-100 font-normal text-base">Night Mode</h2>
                    <div className=' h-10 w-10 flex justify-center items-center'>
                        <Picture image={mode} width={36} height={36}></Picture>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
