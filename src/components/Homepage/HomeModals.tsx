import Image from "next/image";
import Link from "next/link";
import CurveSm from '../../assets/images/curve-sm.svg'
import AICenterIcon from '../../assets/images/ai-icons/ai-center-icon.svg'
import Person from '../../assets/images/ai-icons/person.svg'
import Calender from '../../assets/images/ai-icons/calendar.svg'
import AddAd from '../../assets/images/ai-icons/add_ad.svg'
import AddReaction from '../../assets/images/ai-icons/add_reaction.svg'
import Assignment from '../../assets/images/ai-icons/assignment.svg'
import ChatBubble from '../../assets/images/ai-icons/chat_bubble.svg'
import ThumbUp from '../../assets/images/ai-icons/thumb_up.svg'

export default function HomeModals() {
    return (

        <section className="modals-wrapper section pt-0 relative">
             <Image className="curve-sm absolute" src={CurveSm} alt="curve" width={1970} height={410} priority />
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">AI At The Heart Of Safety</h2>
                    <p className="h6">Advanced models that power clear insights, accurate detection, and efficient decision‑making.</p>
                </div>
                <div className="ai-modals-row relative centered-block">
                    <div className="ai-center-icon centered-block">
                        <Image src={AICenterIcon} alt="ai-icon" width={116} height={138} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full person centered-block">
                        <Image src={Person} alt="person" width={28} height={28} priority />
                    </div>

                     <div className="ai-icon absolute rounded-full calender centered-block">
                         <Image src={Calender} alt="calender" width={32} height={35} priority />
                    </div>
                       <div className="ai-icon absolute rounded-full add-reaction centered-block">
                        <Image  src={AddReaction} alt="add-reaction" width={39} height={37} priority />
                       </div>
                        
<div className="ai-icon absolute rounded-full thumb-up centered-block">
    <Image src={ThumbUp} alt="Thumb-up" width={36} height={35} priority />
</div>
                        <div className="ai-icon absolute rounded-full chat centered-block">
                            <Image src={ChatBubble} alt="chat-bubble" width={35} height={35} priority />
                        </div>
                        <div className="ai-icon absolute rounded-full assignment centered-block">
                            <Image src={Assignment} alt="assignment" width={31} height={35} priority />
                        </div>
                        <div className="ai-icon absolute rounded-full add-ad centered-block">
                            <Image src={AddAd} alt="add-ad" width={38} height={31} priority />
                        </div>
                        
                    
                </div>
            </div>
        </section>

    )
}