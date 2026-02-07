import Image from "next/image";
import Link from "next/link";

export default function HomeModals() {
    return (

        <section className="modals-wrapper centered-block section pt-0 relative">
             <Image className="curve-sm absolute" src='/images/homepage/curve-sm.svg' alt="curve" width={1970} height={410} priority />
              <Image className="curve-lg absolute" src='/images/homepage/ai-icons/ai-lines.svg' alt="curve" width={1920} height={756} priority />
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">AI at The Heart Of Safety</h2>
                    <p className="h6">Advanced models that power clear insights, accurate detection, and efficient decision‑making.</p>
                </div>
                <div className="ai-modals-row relative centered-block">
                    <div className="ai-center-icon centered-block">
                        <Image src='/images/homepage/ai-icons/ai-center-icon.svg' alt="ai-icon" width={116} height={138} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full person centered-block">
                        <Image src='/images/homepage/ai-icons/person.svg' alt="person" width={28} height={28} priority />
                    </div>
                     <div className="ai-icon absolute rounded-full calender centered-block">
                         <Image src='/images/homepage/ai-icons/calendar.svg' alt="calender" width={32} height={35} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full add-reaction centered-block">
                        <Image  src='/images/homepage/ai-icons/add_reaction.svg' alt="add-reaction" width={39} height={37} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full thumb-up centered-block">
                        <Image src='/images/homepage/ai-icons/thumb_up.svg' alt="Thumb-up" width={36} height={35} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full chat centered-block">
                        <Image src='/images/homepage/ai-icons/chat_bubble.svg' alt="chat-bubble" width={35} height={35} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full assignment centered-block">
                        <Image src='/images/homepage/ai-icons/assignment.svg' alt="assignment" width={31} height={35} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full add-ad centered-block">
                        <Image src='/images/homepage/ai-icons/add_ad.svg' alt="add-ad" width={38} height={31} priority />
                    </div>
                </div>
            </div>
        </section>

    )
}