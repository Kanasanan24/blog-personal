export const blog_details = [
    {
        slug: "introduction-hci",
        code: `<div classname="main-content-image"><img src="/assets/images/blog_image/blog-hci.jpg" alt="HCI Introduction [Week 1]"></div><p>&nbsp;&nbsp;&nbsp;&nbsp; เมื่อได้เริ่มเรียน Human-Computer Interaction โดยต่อจากนี้ผมจะขอย่อให้เหลือเพียง HCI ซึ่งเราจะพบว่านิยามของ HCI นั้นมีหลากหลายแต่ผมสรุปได้ว่า HCI เป็นการออกแบบ, ประเมินค่าและนำเทคโนโลยีไปใช้พร้อมศึกษาเหตุการณ์ที่มีความเกี่ยวข้องกับเทคโนโลยีที่พัฒนา</p><strong>ขอบเขตและเป้าหมายของการเรียน HCI</strong><p>&nbsp;&nbsp;&nbsp;&nbsp; จากนิยามของ HCI เราจึงพอจะทราบได้ว่าการเรียนรู้ของเรานั้นจะเน้นไปที่ 2 สิ่งคือ Human และ Computer นั่นเองในฝั่งของ Human เราจะศึกษาในเรื่องของจิตวิทยาและร่างกายของมนุษย์เพื่อออกแบบเทคโนโลยีให้เหมาะสม ส่วน Computer เราก็ควรจะมีความรู้ในเรื่องของ Software และ Hardware เพื่อที่จะได้นำไปปรับใช้กับมนุษย์และสุดท้ายจะต้องมีขั้นตอนในการ ออกแบบ พัฒนา การนำไปใช้และประเมินค่าของเทคโนโลยีโดยในการพัฒนาสิ่งที่เราควรจะคำนึงถึงหรือเป้าหมายจะมี ดังนี้</p><ul><li><b>Safety</b>&nbsp;มีมาตรการในการรักษาความปลอดภัยต่อผู้ใช้งานอย่างไร ?</li><li><b>Utility</b>&nbsp;การทำงานหรือฟังก์ชันเป็นประโยชน์ต่อผู้ใช้งานไหม ?</li><li><b>Efficiency</b>&nbsp;สะดวกและรวดเร็วในการใช้งานมากน้อยเพียงใด ?</li><li><b>Usability</b>&nbsp;ง่ายต่อการใช้งานไหม ?</li><li><b>Appeal</b>&nbsp;ผู้ใช้งานชอบในเทคโนโลยีมากน้อยเพียงใด ?</li></ul><p>ถ้าเราสามารถวัดปัจจัยต่างๆ ตามข้างต้นได้เทคโนโลยีที่เราจะพัฒนาก็จะมีความหมายที่จะทำขึ้นมาได้มากขึ้นเพราะฉะนั้นการศึกษา HCI จึงเป็นสิ่งที่สำคัญ</p><div classname="sub-image-detail"><img src="/assets/images/blog_image/blog-hci/user-experinence.jpg" alt="user-experience"></div><p classname="credit-image">Credit by : tom wr<br><a href="https://hcidiary.wordpress.com/2011/10/27/week-3-usability-and-user-experience-goals/" target="_blank">Usability and User Experience Goals</a></p><p>จะภาพตัวอย่างเราจะพบว่าเป้าหมายของ HCI นั้นมีความคล้ายคลึงกับ User Experience ดังนั้นทั้งสองสิ่งสามารถนำมาปรับและประยุกต์ใช้ให้เข้ากับเทคโนโลยีได้</p><strong>สิ่งที่ควรจะคำนึงถึงเมื่อพัฒนาหรือผลิตเทคโนโลยีคืออะไร ?</strong><p>&nbsp;&nbsp;&nbsp;&nbsp; สิ่งที่ควรจะคำนึงถึงคือการทำให้เป็นมิตรต่อผู้ใช้งาน ประหยัดค่าใช้จ่ายและเวลาในการศึกษาเรียนรู้การใช้งานเทคโนโลยีนั้นๆ</p><p><b>จากข้อสรุปดังกล่าว</b>&nbsp;ทำให้เราพบว่าการทำ Prototype ในวิชา HCI จะต้องเริ่มต้นจากศึกษาผู้ใช้งานและปัญหาให้รอบคอบแล้วเราจะรู้ว่าเครื่องมือ Software หรือ Hardware อะไรที่จะตอบโจทย์ในการแก้ปัญหาโดยที่นำมาพัฒนาต่อยอดให้ผู้ใช้งานมีประสบการณ์การการใช้งานที่ดีมากขึ้น</p>`
    },
    {
        slug: "initial-project-typescript",
        code: `<div className="main-content-image"> <img src="/assets/images/blog_image/blog-typescript.png" alt="การเริ่มต้นโปรเจค Typescript" /> </div> <p> &nbsp;&nbsp;&nbsp;&nbsp; <b>เหตุผล</b>&nbsp;ที่เราควรใช้ Typescript นั้นมีอนู่ด้วยกัน 3 เหตุผลหลักๆ คือ </p> <ul> <li><b>เป็น Superset</b>&nbsp;ของภาษา Javascript</li> <li><b>มีการ Compile</b>&nbsp;คำสั่งก่อนที่จะนำไปใช้งาน</li> <li><b>Static Type</b>&nbsp;แก้ไขตัวแปรที่สามารถเปลี่ยนชนิดข้อมูล</li> </ul> <p> &nbsp;&nbsp;&nbsp;&nbsp; ด้วย 3 เหตุผลนี้ก็เพียงพอที่จะใช้ Typescript นั่นเองเพื่อป้องกันข้อผิดพลาดต่างๆ จาก Javascript ได้มากขึ้นและยังสามารถกำหนดประเภทข้อมูลที่เฉพาะเจาะจงและถ้าเราต้องการจะใช้ Typescript แล้วจะต้องทำการติดตั้ง Typescript ลงในเครื่องสะก่อนโดยการใช้คำสั่ง (ใช้ Command Prompt แนะนำว่าให้ติดตั้งไว้ที่ตำแหน่ง C:\\>) </p> <pre><code>C:\\>npm install -g typescript</code></pre> <p> เมื่อติดตั้งเสร็จแล้วเราสามารถใช้คำสั่ง <code>tsc -v</code> หรือ <code>tsc --version</code> เพื่อเช็คว่า Typescript ถูกติดตั้งลงบนเครื่องแล้วหรือยังพร้อมกับเช็ค version ของภาษา Typescript ได้อีกด้วย </p> <p> &nbsp;&nbsp;&nbsp;&nbsp; ในทีนี้ก็เป็นจุด Climax ของบทความนี้นี่เองคือการสร้าง Project ด้วย Typescript โดยเริ่มต้นผู้อ่านสามารถสร้าง Folder ที่จะทำการสร้าง Project ไว้ได้เลยจากนั้นให้ใช้ Command Prompt คำสั่ง <code>cd [เส้นของของ Folder]</code> เพื่อให้ Command Prompt ได้ชี้ว่าจะทำการงานกับ Project ใน Folder นั้นนั่นเองแล้วสุดท้ายการสร้าง Project Typescript สามารถใช้คำสั่ง </p> <pre><code>tsc --init</code></pre> <p>เป็นคำสั่งที่จะเริ่มต้นหรือ Initial ว่าจะใช้งาน Typescript นั่นเองเพียงเท่านี้ก็สามารถสร้าง Project ด้วย Typescript ได้แล้ว</p>`
    },
    {
        slug: "cognitive-foundation",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/brain-unsplash.jpg" alt="Cognitive Foundation" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จุดมุ่งหมายสำหรับผมในสัปดาห์นี้คือการเรียนรู้เกี่ยวกับร่างกายและพฤติกรรมของมนุษย์แบบเชิงลึกถึงขั้นที่จะอธิบายการทำงานหรือการประมวลผลบางอย่างที่ไม่อาจคิดแบบปกติได้ (เหมือนได้นั่งเรียนชีวะหนักๆ ของช่วงม.ปลาย) เริ่มต้นจากจุดประสงค์หลักๆ มีอยู่ด้วยกัน 5 ปัจจัย
                        </p>
                        <strong>Information I/O</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เริ่มต้นที่ผมได้เรียนรู้เกี่ยวกับประสาทสัมผัสไม่ว่าจะเป็นในเรื่องของการมองเห็น, การได้ยิน, การสัมผัสและการเคลื่อนไหว พบว่าสิ่งที่น่าสนใจสำหรับผมคือการมองเห็นเพราะโดยปกติเราก็ใช้สายตาที่เยอะมากอยู่แล้วในชีวิตประจำวันและผมคิดว่าเป็นประสาทสัมผัสที่สร้าง Emotion ให้กับมนุษย์ได้มากเช่นกัน
                        </p>
                        <strong>Information stored in memory</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; สำหรับเรื่องนี้เป็นเรื่องที่ผมคิดว่านำมาใช้กับการบริหารชีวิตของตัวเองได้ดีเลยครับเพราะได้เข้าใจว่าความจำได้เริ่มต้นตั้งแต่ที่ประสาทสัมผัสของคนเรามีสิ่งเร้าที่ตอบสนองนั่นก็คือแทบจะตลอดเลยแล้วการที่ความจำชั่วคราวจะเปลี่ยนไปเป็นระยะสั้นได้ก็จะเกิดจากความสนใจหรือความตั้งใจของเราโดยความจำระยะสั้นจะเปลี่ยนไปเป็นความจำระยะยาวได้ก็ต้องเกิดจากการฝึกซ้อมแต่อย่ายัดทุกอย่างเข้าสมองต้องค่อยๆ แบ่งและทำความเข้าใจ (ความจำระยะสั้นมีขนาด 7 ± 2 chunks)
                        </p>
                        <p>
                            <b>หมายเหตุ : </b> ในเรื่องของแบบจำลอง Model ของ LTM มีหลายรูปแบบขึ้นอยู่กับว่าเราคิดแบบไหนอยู่แต่สำหรับผมคิดว่าคล้ายๆ กับการเขียนโปรแกรมเชิงวัตถุ OOP
                        </p>
                        <strong>Information processed and applied</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เรื่องของการใช้ Reasoning ที่จะให้เหตุผลในแต่ละแบบอย่าง Deduction, Induction หรือ Adduction เป็นเรื่องที่เข้าใจยากเพราะในการใช้เหตุผลในความเป็นจริงในบางเหตุผลเราก็อาจจะคิดไม่ทันว่าเป็นประเภทไหนแต่สิ่งที่ผมเข้าใจคือมนุษย์เราใช้ Positive Evidence มากกว่า Negative Evidence แต่ตัวอย่างของ Negative Evidence Wason's cards สามารถอธิบายให้เราได้เข้าใจได้
                        </p>
                        <strong>Emotion innfluences human capabilities</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เมื่อได้ศึกษาเรื่องอารมณ์ผมจะพบว่าอารมณ์เกิดจากการตอบสนองของปฏิกิริยาในร่างกายของเราต่อสิ่งเร้าซึ่งจะเกิดอารมณ์ในสถานการณ์ที่ต่างกันมีความเกี่ยวข้องกับ UX/UI หรือความพอใจใน Interface
                        </p>
                        <strong>Individual Difference</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ความแตกต่างของบุคคลแยกปัจจัยสามารถแบ่งได้ตามระยะซึ่งในระยะยาว : เพศ, ร่างกาย, สติปัญญาและความสามารถ ระยะสั้น : ความเครียดและความเหนื่อยล้า และอย่างสุดท้ายคือการเปลี่ยนแปลง : อายุ
                            ในคำถามที่ว่า Will design decision exclude section of user population? จากคำถามนี้ผมคิดว่าตอบยากออยู่ครับขึ้นอยู่กับว่าเรากำลังออกแบบอะไรเพื่อคนกลุ่มไหนแต่ถ้าเป็นแบบ General ก็ควรจะออกแบบงานนั้นๆ ให้ครอบคลุมต่อคนหลายๆ กลุ่ม
                        </p>
                        <p>
                            <b>จากข้อสรุปดังกล่าว </b>ทำให้ผมมีความสนใจในเรื่องของ การมองเห็น ที่มีหลักการคือรับแสงที่สะท้อนจากวัตถุแล้วแปลงเป็นสัญญาณไฟฟ้าแล้วส่งไปที่สมองส่วน Visual Cortex แล้วคิดว่าจะนำหลักการในเรื่องของ Rods และ Cones Cell มาใช้ประกอบการทำ Prototype
                        </p>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-cognitive/eye-structure.jpg" alt="Eye Structure" />
                        </div>
                        <p className="credit-image">
                            Credit by : BioNinja<br />
                            <a href="https://old-ib.bioninja.com.au/options/option-a-neurobiology-and/a3-perception-of-stimuli/sensory-structures.html" target="_blank">Diagram of the Human Eye</a>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ในเบื้องต้นผมจึงมีความคิดในแบบ Productive ที่อาจจะมีความรู้ที่มา Support ไม่มากนักคือการทำให้บุคคลที่มีความบกพร่องทางสายตาสามารถมองเห็น User Interface ได้เหมือนใน VR หรือ Vision ต่างๆ ที่สร้างขึ้นโดยส่งเป็นสัญญาณไฟฟ้าหลอกเข้าไปที่ Visual Cortex เหมือนกับสัญญาณไฟฟ้าที่เกี่ยวกับข้อมูลอื่นๆ ที่ซ้อนทับก่อนส่งไป
                        </p>`
    },
    {
        slug: "user-center-design",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/user-center.jpg" alt="User Center Design" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เมื่อได้เรียนรู้เกี่ยวกับ Conceptual Model เราจะได้เข้าใจเพิ่มเติมมากขึ้นว่าจะทำอย่างไรให้ผลิตภัณฑ์ของเราที่ออกแบบมาผู้อื่นสามารถทำความเข้าใจและใช้งานได้ง่าย ซึ่งผมสามารถสรุปปัจจัยต่างๆ ได้ตามดังต่อไปนี้
                        </p>
                        <strong>ส่วนที่มีความเกี่ยวข้องกับการพัฒนา Conceptual Model</strong>
                        <ul>
                            <li>
                                <b>การทำความเข้าใจขอบเขตของปัญหา</b> ก่อนที่เราจะเริ่มต้นในการทำผลิตภัณฑ์อะไรสักอย่างเราจะต้องรู้ก่อนว่า เราทำเพื่ออะไร? ทำเพื่อใคร? ทำแบบไหน? หรือปัจจัยต่างๆ ซึ่งเบื้องต้นให้ลองนำหลักการ 5W1H ใช้ก่อนได้ซึ่งจะทำให้เราเข้าใจถึงปัญหาและสิ่งที่จะทำต่อ
                            </li>
                            <li>
                                <b>กำหนดสมมติฐานและการอ้างอิงให้ชัดเจน</b> เป็นการที่เราคิดหรือเชื่อว่าสิ่งที่เราทำอยู่จะส่งผลอย่างไรกับตัวผู้ใช้งาน เช่น สมมติฐานคือผู้ใช้งานจะสามารถเข้าใจ interface ที่ซับซ้อนได้ (ความเป็นจริงอาจจะผิดจากที่ตั้งในสมมติฐานได้)
                            </li>
                            <li>
                                <b>ระบุว่าสิ่งที่เราออกแบบจะสนับสนุนผู้ใช้งานอย่างไร</b> เป็นการออกแบบบางอย่างที่จะสามารถทำให้ผู้ใช้งานใช้เครื่องมือช่วยเหลือให้ทำงานอย่างหรือบรรลุเป้าหมายนั้นๆ 
                            </li>
                        </ul>
                        <strong>Conceptual Model เป็นการอธิบายแบบ High-Level ของผลิตภัณฑ์</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ความหมายของ High-Level สำหรับผมนั้นหมายถึงว่า Conceptual Model เป็นสิ่งที่มนุษย์หรือผู้ใช้งานทั่วไปสามารถทำความเข้าใจได้ง่ายซึ่งไม่ต้องอาศัยความเชี่ยวชาญในการศึกษาซึ่งในส่วนนี้ จะบ่งบอกว่าการทำ Conceptual Model ของเราจะส่งผลให้ผู้ใช้งานทำงานอะไรกับผลิตภัณฑ์ได้บ้างแล้วผู้ใช้ต้องเข้าใจในสิ่งไหนก่อนที่จะใช้งาน
                        </p>
                        <strong>ประเภทของ Interaction ที่ได้จัดเตรียมที่สนับสนุนผู้ใช้งาน</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เป็นการออกแบบ Interaction ที่เอื้ออำนวยต่อกลุ่มเป้าหมายที่ได้อธิบายใน "ส่วนที่มีความเกี่ยวข้องกับการพัฒนา Conceptual Model" เช่น ถ้าเราต้องการที่จะออกแบบผลิตภัณฑ์สำหรับผู้ที่บกพร่องทางสายตาจะมี Interaction แบบไหนบ้างที่จะเอื้ออำนวยต่อกลุ่มเป้าหมายนี้ซึ่ง Interaction สำหรับกลุ่มเป้าหมายนี้ในปัจจุบันเราควรคำนึงถึงเรื่องประสาทสัมผัสทางการได้ยินและการสัมผัส
                        </p>
                        <strong>การวางกรอบแนวคิดที่เกี่ยวข้องกับการออกแบบและการวิจัย</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ในสิ่งนี้คือสิ่งที่เรากำลังจะหาเครื่องมือหรือตัวช่วยที่จะคอยกำหนดทิศทางให้กับผลิตภัณฑ์ของเราที่กำลังออกแบบหรือพัฒนาซึ่งสามารถใช้ได้หลายอย่าง เช่น Paradigms, Visions, Theories, Models และ Frameworks
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>จากการศึกษาในสัปดาห์นี้</b> ทำให้ผมได้รับรู้ว่าการที่เราจะออกแบบ Interaction อะไรสักอย่างนึงควรที่จะคำนึงถึงผู้ใช้งานเป็นอันดับแรกเพื่อให้เราสามารถทำ Prototype ได้เจาะจงและตอบโจทย์ต่อกลุ่มเป้าหมายของเรามากขึ้นและเลือกรูปแบบการทำงานภายในทีมเพื่อที่จะทำให้สิ่งที่กำลังออกแบบนั้นบรรลุเป้าหมาย
                        </p>
                        <strong>Doraemon Activity : ผ้าคุมล่องหน</strong>
                        <p>Activity นี้ได้ทำการศึกษา Persona และ Scenario ซึ่งทั้งสองสิ่งนี้จะต้องมีความเชื่อมโยงกับอุปกรณ์ Doraemon ที่เราได้เลือก</p>
                        <div className="activity-image">
                            <img src="/assets/images/blog_image/blog-user-center-design/persona-week3.png" alt="Persona" />
                        </div>
                        <p className="credit-image">
                            รูปภาพแสดง Persona ของ Sidney Reilly
                        </p>
                        <div className="activity-image">
                            <img src="/assets/images/blog_image/blog-user-center-design/scennario-week3.png" alt="Scenario" />
                        </div>
                        <p className="credit-image">
                            รูปภาพแสดงสถานการณ์จำลองของผ้าคุมล่องหน
                        </p>`
    },
    {
        slug: "user-experiences",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/user-experience.jpg" alt="User Experience" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากคำกล่าวของ "Don Norman" ที่ได้พูดถึง User Experience ว่าผลิตภัณฑ์เป็นได้มากกว่าผลิตภัณฑ์ ซึ่งมันจะสื่อถึงการคิดทบทวนทุกขั้นตอนของผลิตภัณฑ์ บริการไตร่ตรองการทำงานไปจนถึงขั้นสุดท้าย รวมถึงการออกแบบการแนะนำ การบำรุงรักษา การบริการอื่นๆ ทำให้ทุกขั้นตอนการทำงานเป็นไปได้อย่างราบรื่นถึงจะเรียกได้ว่า User Experience เมื่ออธิบายแบบนี้จะทำให้เข้าใจได้ยากจะสามารถแยกปัจจัยออกได้เป็นดังนี้
                        </p>
                        <ul>
                            <li>
                                <b>Requirement</b> คือสิ่งที่อธิบายได้ว่าผลิตภัณฑ์ที่พัฒนา ควรทำอะไรและทำงานอย่างไรในแต่ละกระบวนการ
                            </li>
                            <li>
                                <b>การกำหนด Requirement ให้ชัดเจน</b> การสื่อสารที่ชัดเจนหรือการอธิบายด้วยเครื่องมือบางอย่างที่ทำให้เข้าใจมากขึ้นจะทำให้หลีกเลี่ยงความเข้าใจผิดระหว่าง ผู้พัฒนาและผู้ใช้งานหรือลูกค้าได้
                            </li>
                            <li>
                                <b>ประเภทของ Requirement</b>
                                <ul>
                                    <li>
                                        <b>Functional</b> การกำหนดระบบที่ต้องทำ
                                    </li>
                                    <li>
                                        <b>Data</b> ประเภทและโครงสร้างของข้อมูล
                                    </li>
                                    <li>
                                        <b>Environmental</b> สภาพแวดล้อมที่ใช้งาน
                                    </li>
                                    <li>
                                        <b>User Characteristics</b> ลักษณะของกลุ่มผู้ใช้งาน
                                    </li>
                                    <li>
                                        <b>Usability Goals</b> เป้าหมายหรือบรรลุวัตถุประสงค์อะไรเมื่อใช้งาน
                                    </li>
                                    <li>
                                        <b>User Experience Goals</b> ประสบการณ์ของผู้ใช้งานว่ามีความชอบหรือประสบการณ์ที่ดีแบบไหน
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>การเก็บ Requirement</b> มีหลายวิธีที่จะทำให้เราได่ Requirement เช่น การทำแบบสอบถาม การสัมภาษณ์ การสังเกตุพฤติกรรม การศึกษาจากเอกสารและการวิเคราะห์จากผลิตภัณฑ์ที่มีความคล้ายคลึงกัน
                            </li>
                            <li>
                                <b>Scenario</b> สร้างสถานการณ์หรือเรื่องราวเพื่อเล่าแนวทางการใช้งานในปัจจุบัน อนาคตหรือการพัฒนาเพิ่มเติม
                            </li>
                            <li>
                                <b>Persona</b> การหาโปรไฟล์ของผู้ใช้งานสมมติเพื่อนำมาใช้ในการออกแบบผลิตภัณฑ์ให้ตรงกับ Requirement หรือกลุ่มเป้าหมาย
                            </li>
                            <li>
                                <b>Scenario และ Persona</b> เมื่อนำมาวิเคราะห์ร่วมกันจะทำให้เราเห็นว่าผลิตภัณฑ์ของเราตอบโจทย์การใช้งายมากน้อยแค่ไหนและเป็นอย่างไร
                            </li>
                            <li>
                                <b>Use Case</b> เป็นการอธิบายหรือออกแบบการโต้ตอบระหว่างผูใช้งานและระบบ
                            </li>
                        </ul>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-user-experience/user-experience-blind.png" alt="Blind User Interface" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>จึงสรุปได้ว่า</b> ปัจจัยในข้างต้นนั้นมีการอธิบายถึง User Experience, Requirement, Scenario และ Persona ซึ่งสิ่งเหล่านี้สามารถนำมาใช้ในการออกแบบผลิตภัณฑ์ของเราให้ตอบโจทย์ผู้ใช้งานและมอบประสบการณ์ที่ดีได้ดังนั้นในการทำ Prototype ผมจึงนำ Persona มาใช้ร่วมกับ Scenario เพื่อให้พบกับการออกแบบสถานการณ์ที่เหมาะสมในการทำ Demo 
                        </p>`
    },
    {
        slug: "interaction-design-basic",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/interaction-design.jpg" alt="VR Headset" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ที่น่าสนใจในสัปดาห์นี้สำหรับผมแล้วขอเริ่มต้นจากการทำความรู้จักกับ <code>Golden rules and heuristics</code> ความแตกต่างระหว่าง "Golden Rules" และ "Heuristics" จะเป็นดังต่อไปนี้
                        </p>
                        <ul>
                            <li>
                                <b>Golden Rules</b> เป็นหลักการออกแบบให้ตอบสนองต่อความต้องการของผู้ใช้งานให้ดี
                            </li>
                            <li>
                                <b>Heuristics</b> เป็นข้อแนะนำเพื่อช่วยในการตัดสินใจในการออกแบบเพื่อผลลัพธ์ที่ดี
                            </li>
                        </ul>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ทั้งสองอย่างนี้อาจจะทำให้สับสนอยู่ผมเลยคิดว่าการศึกษาจากหลักการจะเข้าใจได้มากขึ้นว่า 2 สิ่งนั้นแตกต่างกันอย่างไร
                        </p>
                        <strong>Nielsen's 10 Heuristics</strong>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-interaction-design/nielsen.jpg" alt="Nielsen" />
                        </div>
                        <p className="credit-image">
                            Credit by : <a href="https://www.nngroup.com/people/jakob-nielsen/" target="_blank">Jakob Nielsen</a>
                        </p>
                        <ul>
                            <li>
                                <b>Visibility of System Status</b> แสดงสถานะของระบบเพื่อให้ผู้ใช้รับรู้ว่ากำลังทำอะไรอยู่ เช่น การทำ preload เพื่อโหลดเว็บ
                            </li>
                            <li>
                                <b>Match between System and The Real World</b> ควรใช้ภาษาหรือการสื่อสารอธิบายที่คุ้นชินเพื่อให้ผู้ใช้เข้าใจความหมาย
                            </li>
                            <li>
                                <b>User Control and Freedom</b> การใช้งานมีความยืดหยุ่น เช่น การ Redo, Undo การทำ Text Editor หรืออื่นๆ
                            </li>
                            <li>
                                <b>Consistency and Standards</b> การออกแบบให้มีความสอดคล้องกันภายในระบบและเป็นมาตรฐานผู้ใช้งานคุ้นชิน เช่น การใช้ icon ได้ถูกวิธี ฟังก์ชันและผลลัพธ์อยู่ในทิศทางเดียวกัน
                            </li>
                            <li>
                                <b>Error Prevention</b> การป้องกันข้อผิดพลาด
                            </li>
                            <li>
                                <b>Recognition Rather Than Recall</b> การออกแบบให้ผู้ใช้จำโดยมองเห็นแทนที่จะให้นึกเอง
                            </li>
                            <li>
                                <b>Flexibility and Efficiency of Use</b> ควรปรับใช้ระบบให้เหมาะกับกลุ่มเป้าหมายโดยช่วยให้พวกเขาใช้งานได้มีประสิทธิภาพ
                            </li>
                            <li>
                                <b>Aesthetic and Minimalist Design</b> มี User Interface ที่สวยและเรียบง่าย
                            </li>
                            <li>
                                <b>Help Users Recognize, Diagnose, and Recover from Errors</b> ข้อผิดพลาดควรแสดงอย่างเรียบง่าย เช่น การทำ Alert หรือ Popup เพื่อแจ้งข้อผิดพลาดโดยใช้คำที่เรียบง่าย
                            </li>
                            <li>
                                <b>Help and Documentation</b> จัดเตรียมคำแนะนำหรือวิธีการใช้งานให้ผู้ใช้งานได้รับรู้
                            </li>
                        </ul>
                        <strong>Shneiderman's 8 Golden Rules</strong>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-interaction-design/shneiderman.jpg" alt="Shneiderman" />
                        </div>
                        <p className="credit-image">
                            Credit by : <a href="https://en.wikipedia.org/wiki/Ben_Shneiderman">Ben Shneiderman</a>
                        </p>
                        <ul>
                            <li>
                                <b>Strive for Connsistency</b> คงความสม่ำเสมอหรือใช้สีใช้ icon ให้เป็นมาตรฐานเดียวกับ
                            </li>
                            <li>
                                <b>Enable Frequent Users to Use Shortcuts</b> ให้ผู้ใช้งานใช้ทางลัด เช่น การใช้คีย์ลัด
                            </li>
                            <li>
                                <b>Offer Informative Feedback</b> ให้การตอบกลับอย่างชัดเจนว่าดำเนินการอะไรอยู่
                            </li>
                            <li>
                                <b>Design Dialogs to Yield Closure</b> เมื่อทำงานเสร็จสิ้นควรบอกถึงจุดจบชัดเจน เช่น Alert "Success", Created "Complete"
                            </li>
                            <li>
                                <b>Prevent Errors</b> ป้องกัน Error
                            </li>
                            <li>
                                <b>Permit Easy Reversal of Actions</b> สามารถย้อนกลับหรือแก้ไขได้ง่าย
                            </li>
                            <li>
                                <b>Support Internal Locus of Control</b> ให้ผู้ใช้กำหนดทิศทางของระบบแทนที่จะบังคับ
                            </li>
                            <li>
                                <b>Reduce Short-Term Memory Load</b> ลดภาระที่ผู้ใช้งานจะต้องใช้การจำเอง เช่น การทำ autocomplete
                            </li>
                        </ul>
                        <strong>วิธีการเลือก Interface</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ปัจจุบันมี Interface อยู่หลากหลายชนิดซึ่งเราจะมีวิธีการไหนในการเลือกใช้สามารถตัดสินใจได้จากปัจจัยเหล่านี้
                        </p>
                        <ul>
                            <li>Interface ที่ขึ้นอยู่กับลักษณะงาน เช่น ต้นทุน ผู้ใช้งาน ความทนทาน และอื่นๆ</li>
                            <li>Multimedia ดีกว่า Interface แบบจับต้องไหม?</li>
                            <li>การพูดมี Performance ดีกว่า Interface ที่อาศัยคำสั่งไหม?</li>
                            <li>Interface แบบ Multi Mode ดีกว่าแบบ Mono Mode หรือไม่?</li>
                            <li>Interface แบบอุปกรณ์สวมใส่ดีกว่า Mobile ไหม?</li>
                            <li>สภาพแวดล้อมจำลองเหมาะกับ Interface ที่ใช้เล่นเกมไหม</li>
                            <li>จำเป็นต้องใช้ Interface ที่แชร์กันได้แทน Computer ที่เชื่อม Network ไหม?</li>
                        </ul>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>จากการสรุป</b> จะพบว่า Golden Rule คือสิ่งที่จำเป็นต้องปฏิบัติตามเพื่อให้ผลลัพธ์การออกแบบดีขึ้นส่วน Heuristic คือคำแนะนำที่ถ้าทำตามก็จะดีมากขึ้นเพียงเท่านี้ก็จะทำให้เราได้ออกแบบผลิตภัณฑ์ได้ดีมากขึ้นและในการออกแบบเราจะใช้ Interface อะไรในการทำงานสำหรับผมแล้ว Interface ที่ขึ้นอยู่กับลักษณะงานมีความสำคัญมากที่สุดโดยเฉพาะปัจจัยคือ ผู้ใช้งาน สามารถนำไปประยุกต์ในการทำ Prototype คือออกแบบ Interface ให้เหมาะสมกับกลุ่มเป้าหมายได้ชัดเจนขึ้น
                        </p>
                        <strong>Project Activity : Interface Design</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากความรู้ที่ได้รับในสัปดาห์นี้ทำให้ภายในทีมได้ออกแบบ Interface ที่เหมาะสมสำหรับบุคคลที่มีความบกพร่องทางสายตาได้ซึ่งได้นำหลักการของ Cognitive Foundation ใน Week 2 เข้ามาช่วยในการตัดสินใจ
                        </p>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-interaction-design/interface.jpg" alt="Interface" />
                        </div>
                        <p className="credit-image">
                            รูปภาพแสดงแบบจำลองของ Interface
                        </p>`
    },
    {
        slug: "prototyping",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/prototype.jpg" alt="Prototyping" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; Prototype ในมุมของผมแล้วคิดว่าเป็นการแสดงผลลัพธ์อย่างนึงที่ออกแบบมาแล้วอนุญาตให้ผู้ที่มีส่วนได้ส่วนเสีย (stakeholder) สามารถโต้ตอบได้ ซึ่ง Prototype สามารถทำได้หลายรูปแบบ เช่น ภาพร่างหน้าจอ, วิดีโอจำลอง, software ที่มา demo หรืออื่นๆ
                        </p>
                        <strong>ทำไมต้องทำ Prototype ?</strong>
                        <ul>
                            <li>เพื่อประเมินและรับข้อเสนอแนะจากผู้ที่มีส่วนได้ส่วนเสีย</li>
                            <li>ทำให้คนภายในทีมสื่อสารกันได้ดีมากขึ้น</li>
                            <li>ทดสอบความคิดที่ได้ออกแบบ</li>
                            <li>เพื่อตอบคำถามและสนับสนุนผู้ที่ออกแบบในการเลือกทางเลือก</li>
                            <li>และอื่นๆ</li>
                        </ul>
                        <strong>ทำความรู้จักกับ Fidelity และ Interactivity</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; Fidelity คือระดับความสมจริงของสิ่งที่ออกแบบ ส่วน Interactivity คือความสามารถในการโต้ตอบระหว่างผู้ใช้งานกับระบบ 2 สิ่งนี้เป็นปัจจัยที่ใช้ใน Prototype ซึ่งจะเรียงระดับจากน้อยไปมากของ Fidelity และ Interactivity ตามดังนี้
                        </p>
                        <ul>
                            <li>Sketching</li>
                            <li>Storyboards</li>
                            <li>UI Mockups</li>
                            <li>Interraction Flows</li>
                            <li>Video Prototypes</li>
                            <li>Interactive Prototypes</li>
                            <li>Final Native Application</li>
                        </ul>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากรูปแบบ Prototype ดังกล่าวจะพบว่าการ Sketching จะมี Fidelity และ Interactivity ต่ำสุดส่วน Final Native Application จะมี Fidelity และ Interactivity สูงที่สุด
                        </p>
                        <strong>ก่อนที่จะทำ Prototype ควรจะทำอะไรก่อน</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ก่อนที่เราจะเริ่มต้นทำ Prototype โดยตรงเลยเราควรจะต้องทำ Conceptual Design และ Concrete Design ก่อน
                        </p>
                        <ul>
                            <li>
                                <b>Conceptual Design</b> เป็นการวางแผนแนวคิดหลักของระบบจะเน้นไปที่การกำหนดเป้าหมายและวัตถุประสงค์ อธิบายหลักการทำงานหลักๆ สามารถใช้แผนภาพหรือโมเดลแนวคิดมาอธิบายเพิ่มเติมได้ ซึ่งสามารถพัฒนาโดยใช้ Interface Metaphors, Interaction Styles และ Interface Style
                            </li>
                            <li>
                                <b>Concrete Design</b> เป็นการนำ Conceptual Design มาพัฒนาให้เห็นเป็นรูปธรรม เช่น ทำ UX/UI, Code หรือโครงสร้างที่ชัดเจน
                            </li>
                        </ul>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>สรุปจากข้างต้น</b> ก่อนที่เราจะเริ่มทำ Prototype การที่เราทบทวนหรือทำแนวคิดให้ชัดเจนก่อนจะทำให้ Prototype ของเราดีมากขึ้นและการเลือก Prototype ในการออกแบบก็เป็นสิ่งที่สำคัญซึ่งควรที่จะเลือกแบบที่ผู้ใช้งานสามารถโต้ตอบได้ถึงจะดีซึ่งภายในทีมของผมจึงตัดสินใจเลือกทำ Interactive Prototype เพื่อนำมาจำลองสถานการณ์โดยใช้ VR เข้ามาเกี่ยวข้องซึ่งจะทำให้ผู้ใช้งานสามารถโต้ตอบ, วิจารณ์และให้ข้อเสนอแนะกับการออกแบบได้มากขึ้น
                        </p>
                        <strong>Project Presentation</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; การนำเสนอ Project ในสัปดาห์นี้เกี่ยวข้องกับการระดมความคิดว่ากำลังจะทำอะไรมี Interface เป็๋นแบบไหน Feature เป็นอย่างไรซึ่งช่วงแรกนั้นได้รับข้อเสนอแนะและแก้ไขเพื่อให้มี Project ที่ดีกว่าเดิม
                        </p>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-prototyping/persona-project.jpg" alt="Persona" />
                        </div>
                        <p className="credit-image">
                            รูปภาพแสดง Persona
                        </p>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-prototyping/feature.jpg" alt="Feature" />
                        </div>
                        <p className="credit-image">
                            รูปภาพแสดง Feature ของ Project
                        </p>`
    },
    {
        slug: "extended-reality",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/extended-reality.jpg" alt="Extended Reality" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เริ่มต้นเรามาทำความรู้จักกับ Extended Reality กันก่อนว่าคืออะไร Extended Reality (XR) เป็นคำที่ใช้เรียกรวมเทคโนโลยีที่ผสมผสานระหว่างโลกจริงและโลกเสมือนเข้าด้วยกันซึ่งรวมถึง Virtual Reality (VR), Augmented Reality (AR) และ Mixed Reality (MR) แล้ว VR, AR และ MR คืออะไร ?
                        </p>
                        <strong>Virtual Reality (VR)</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เป็นการจำลองโลกเสมือนแบบ 360 องศาและมักใช้ควบคู่กับอุปกรณ์ที่สามารถจำลองโลกเสมือนได้อย่าง VR Headset ซึ่ง VR มีคุณสมบัติหลักอยู่ด้วยกัน 3 อย่างดังนี้
                        </p>
                        <details>
                            <summary>3D stereoscopic display</summary>
                                <p>การสร้างภาพสามมิติโดยอาศัยเทคนิคการสร้างภาวะลวงตาซึ่งสามารถอ่านได้จาก Cognitive Foundation ในเรื่องของภาวะภาพลวงตา</p>
                        </details>
                        <br /><br />
                        <details>
                            <summary>Wide field of view display</summary>
                            <p>การมองเห็นมุมมองกว้าง ซึ่งเป็นความสามารถของแว่นที่ทำให้มองเห็นได้ใกล้เคียงกับตาของมนุษย์</p>
                        </details>
                        <br /><br />
                        <details>
                            <summary>Low latency head tracking</summary>
                            <p>head tracking คือการติดตามการเคลื่อนไหวของศีรษะเมื่อมีการหันมองทิศทางต่างๆ แบบ Low latency ซึ่งมีระยะความหน่วงให้น้อยที่สุด</p>
                        </details>
                        <br /><br />
                        <strong>Augmented Reality (AR)</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เป็นการนำเทคโนโลยีระหว่างโลกจริงและโลกเสมือนเข้าด้วยกัน โดยใช้ software หรือ interface device ต่างๆ ซึ่งจะมีคุณสมบัติอยู่ 3 อย่างดังนี้
                        </p>
                        <details>
                            <summary>Combines Read and Virtual Images</summary>
                            <p>ผสมผสานระหว่างความเป็นจริงกับภาพเสมือนซึ่งควรเห็นในเวลาเดียวกันทั้งคู่</p>
                        </details>
                        <br /><br />
                        <details>
                            <summary>Interactive in real-time</summary>
                            <p>เนื้อหาที่จำลองควรที่จะโต้ตอบกับผู้ใช้งานได้</p>
                        </details>
                        <br /><br />
                        <details>
                            <summary>Registered in 3D</summary>
                            <p>คือจัดตำแหน่ง object 3D ให้ตรงกับตำแหน่งในโลกจริง</p>
                        </details>
                        <br /><br />
                        <strong>Mixed Reality (MR)</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; การผสมผสานระหว่างเทคโนโลยี VR และ AR เข้าด้วยกันซึ่งจะมีทั้งโลกเสมือนและโลกจริงผสมกัน
                        </p>
                        <strong>แล้ว AR กับ MR ต่างกันอย่างไร ?</strong>
                        <p>
                            AR เป็นการเน้นโลกจริงที่มี object ของโลกเสมือนเสริม <br />  
                            MR จะอยู่ช่วงระหว่างกลางของ VR และ AR
                        </p>
                        <strong>* Spatial</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; สิ่งที่เกี่ยวข้องกับตำแหน่ง, ระยะทาง, ทิศทาง, ขนาด หรือความสัมพันธ์ของ object ในพื้นที่ 3D เช่น
                            Spatial Mapping เป็นการสแกนพื้นที่จริงเพื่อสร้าง map 3D ให้ object เหมือนอยู่กับโลกจริง
                            Spatial Audio เป็นเสียงที่ออกมาจากตำแหน่งเฉพาะ อย่างข้างหลัง ซ้าย ขวาหรือที่ห่างไกล
                            Spatial Anchors เป็นจุดยึดสำหรับ object เสมือนไม่ให้ลอยหรือเคลื่อนตามกล้อง
                            Spatial Awareness เป็นความสามารถของมนุษ์ในการรับรู้ตำแหน่งและสภาพแวดล้อมรอบตัว
                        </p>
                        <strong>สิ่งที่ควรจะรู้ก่อนที่จะเริ่มต้นในการพัฒนาเทคโนโลยีทาง XR</strong>
                        <ul>
                            <li>
                                <b>Affordances</b>
                                <p>เป็นความสามารถในการรับรู้ความเป็นจริงของสิ่งของว่ามีคุณสมบัติในการใช้งานสิ่งนั้นอย่างไร</p>
                                <p>ความแตกต่างระหว่าง Physical และ Virtual Affordances</p>
                                <details>
                                    <summary>Physical Affordances</summary>
                                    <p>
                                        - ดูและรู้สึกได้ถึงความสมจริงของวัตถุ <br />
                                        - มีรูปร่าง, พื้นผิว, สีและน้ำหนัก อื่นๆ <br />
                                        - ออกแบบจากระบบโรงงานหรืออุตสาหกรรม
                                    </p>
                                </details>
                                <br /><br />
                                <details>
                                    <summary>Virtual Affordances</summary>
                                    <p>
                                        - รับรู้ได้ว่าเป็น object เสมือน <br />
                                        - Copy มาจาก object จริง <br />
                                        - ออกแบบจาก interface ต่างๆ
                                    </p>
                                </details>
                            </li>
                        </ul>
                        <strong>Affordances ใน VR</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เป็นการออกแบบ interface object มีไว้เพื่อแสดงวิธีการใช้งานซึ่งมีเรื่องที่จะต้องคำนึงถึงคือ
                        </p>
                        <ul>
                            <li>ใช้สัญลักษณ์เพื่อแสดงความเป็นไปได้ในการรับรู้</li>
                            <li>ควรที่จะทำให้การรับรู้ Affordances ตรงกับความเป็นจริง</li>
                            <li>ทำให้พฤติกรรมของ object เป็นไปตามที่คาดหวังไว้มี Good Cognitive</li>
                        </ul>
                        <strong>XR Travel techniques</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ส่วนใหญ่แล้วการ Travel ใน XR วิธีการที่นิยมมีอยู่ด้วยกัน 7 รูปแบบดังนี้
                        </p>
                        <ul>
                            <li>
                                <b>Teleportation</b>
                                <ul>
                                    <li>ผู้ใช้ชี้ไปยังจุดที่ต้องการจะไป แล้ว “วาร์ป” ไปทันที</li>
                                    <li>ลดอาการเวียนหัวได้ดี</li>
                                    <li>นิยมใช้ใน VR มาก</li>
                                </ul>
                            </li>
                            <li>
                                <b>Dash or Blink Move</b>
                                <ul>
                                    <li>คล้ายกับ Teleport แต่จะมี “เอฟเฟกต์ย้ายตำแหน่งแบบเร็ว” (เช่น หน้าจอเบลอขณะย้าย)</li>
                                    <li>ทำให้การเปลี่ยนตำแหน่งรู้สึกสมจริงมากขึ้นกว่าการวาร์ปทันที</li>
                                </ul>
                            </li>
                            <li>
                                <b>Smooth Locomotion</b>
                                <ul>
                                    <li>ผู้ใช้เดินหรือเคลื่อนที่ด้วยคอนโทรลเลอร์ เหมือนเดินในเกม FPS</li>
                                    <li>ต้องมีการจัดการกล้องและมุมมองให้ดี เพราะอาจทำให้เวียนหัว</li>
                                </ul>
                            </li>
                            <li>
                                <b>Arm Swinging / Natural Movement</b>
                                <ul>
                                    <li>เคลื่อนที่โดยใช้การ “แกว่งแขน” หรือการเคลื่อนไหวของร่างกาย เช่น ใช้ motion controller ตรวจจับการเดินจำลอง</li>
                                    <li>ช่วยให้รู้สึกเหมือนเดินจริงมากขึ้น</li>
                                </ul>
                            </li>
                            <li>
                                <b>Walking-in-Place (WIP)</b>
                                <ul>
                                    <li>ผู้ใช้อยู่กับที่แต่ทำท่าเดิน ระบบจะแปลความเคลื่อนไหวว่าเป็นการเดินในโลกเสมือน</li>
                                    <li>ใช้เซ็นเซอร์ตรวจจับการเคลื่อนไหวของขา</li>
                                </ul>
                            </li>
                            <li>
                                <b>Redirected Walking</b>
                                <ul>
                                    <li>ใช้เทคนิคหลอกสายตา เช่น การหมุนแผนที่เล็กน้อย เพื่อให้ผู้ใช้เดินเป็นวงกลมในโลกจริง แต่รู้สึกว่าเดินเป็นเส้นตรงในโลกเสมือน</li>
                                </ul>
                            </li>
                            <li>
                                <b>Vehicle-based Movement</b>
                                <ul>
                                    <li>ผู้ใช้เดินทางด้วยพาหนะในโลกเสมือน เช่น รถยนต์ เรือ ลิฟต์</li>
                                    <li>ทำให้การเคลื่อนที่รู้สึกนุ่มนวล และลด motion sickness</li>
                                </ul>
                            </li>
                        </ul>
                        <strong>XR sound design</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ข้อแตกต่างระหว่าง Spatialization และ Localization
                        </p>
                        <ul>
                            <li>
                                <b>Spatialization</b>
                                <p>เป็นการทำให้เสียงออกมาจากตำแหน่งเฉพาะในพื้นที่ 3D</p>
                            </li>
                            <li>
                                <b>Localization</b>
                                <p>เป็นความสามารถในการรับรู้ตำแหน่งของต้นทางเสียงของมนุษย์
                                </p>
                            </li>
                        </ul>
                        <p>
                            สิ่งที่จะต้องคำนึงถึง
                            1. ความแตกต่างของเวลาเสียงระหว่างหูทั้งสองข้าง
                            2. ผลกระทบจากสภาพแวดล้อม
                        </p>
                        <strong>
                            XR Usability Heuristics สามารถนำหลักการของ Nielson Norman มาประกอบได้ &nbsp;
                            <a href="https://kanasanan24.netlify.app/blogs/interaction-design-basic">Interaction Design Basic</a>
                        </strong>
                        <p>
                            <b>จากข้อสรุปดังกล่าว</b> ทำให้กลุ่มผมสามารถตัดสินใจตัวเลือกเทคโนโลยีที่จะนำมาใช้ในการออกแบบ Prototype ของแบบจำลอง Iris Vision สำหรับผู้ที่มีความบกพร่องทางสายตาได้โดยจะใช้วิธีการพัฒนา VR ผ่าน Unreal Engine 
                        </p>
                        <strong>Spatial - Extended Reality (XR) Interaction Design – Workshop</strong>
                        <br />
                        <br />
                        <pre>
            <strong>Case Study #Beat Saber</strong>
                            <p>
                                1.What is the app main object interaction method? <br />
                                - ผู้เล่นใช้ มือทั้งสองข้างถือคอนโทรลเลอร์ VR ที่จำลองเป็นดาบเลเซอร์ <br />
                                - ฟันบล็อกตามจังหวะของเพลง โดยมีสีและทิศทางที่ต้องฟันให้ถูกต้อง <br />
                                - ต้องหลบสิ่งกีดขวาง เช่น กำแพงและระเบิด ทำให้เกิดความท้าทาย
                            </p>
                            <p>
                                2.How is the app menu system? <br />
                                - เมนูหลักเป็น 3D Floating Panel ที่อยู่ด้านหน้าผู้เล่น <br />
                                - ใช้คอนโทรลเลอร์ชี้และคลิกเพื่อเลือกเมนู <br />
                                - มี UI ที่เรียบง่าย
                            </p>
                            <p>
                                3.What is the traveling technique use in the app? <br />
                                - ผู้เล่นจะยืนอยู่กับที่ และใช้การเคลื่อนไหวของร่างกาย (Physical Movement) เช่น ฟัน ฟาด และหลบ <br />
                                - เกมไม่ต้องการพื้นที่กว้างขวางในการเคลื่อนที่ เพราะไม่ต้องใช้ travel techniques 
                            </p>
                            <p>
                                4.What about sound, is it 3D spatial sound? <br />
                                - Beat Saber ใช้ 3D Spatial Sound เพื่อเพิ่มความสมจริงและอารมณ์ของเพลง <br />
                                - เสียงของบล็อกที่ถูกฟันและเอฟเฟกต์เสียงต่าง ๆ จะเปลี่ยนไปตามมุมมองของผู้เล่น <br />
                                - มีการออกแบบเสียงให้ตรงกับจังหวะและทิศทางของเพลง
                                เพลงมีมิติเสียงรอบทิศทาง
                            </p>
                            <p>
                                5.Discuss what is good or bad about the game you tried? <br />
                                - ข้อดีของเกม: <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;1. ใช้งานง่าย ไม่ต้องใช้ปุ่มเยอะ brแค่ฟันบล็อกให้ตรงจังหวะ <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;2. ออกกำลังกายไปพร้อมกับเล่นเกม <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;3. มีเพลงเยอะ และรองรับเพลง Mod จากผู้ใช้ <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;4. ระบบเสียงและภาพทำให้ผู้ใช้รู้สึดสมจริง <br />
                                - ข้อเสียของเกม: <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;1. ไม่มี multiplayer co-op ในตัว ต้องพึ่ง mod เสริม <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;2. บางเพลงมีเลเวลความยากสูง ทำให้มือใหม่เล่นยาก <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;3. UI เมนูอาจดูเรียบเกินไปและไม่มี gesture support
                            </p>
                            <p>
                                6.How to make it better? <br />
                                - ผู้เล่นสามารถพูดคำสั่งเช่น "Start Game" หรือ "Pause" แทนการกดปุ่ม <br />
                                - เพิ่มระบบ Adaptive Difficulty ที่สามารถปรับระดับความยากได้อัตโนมัติตามสกิลของผู้เล่น <br />
                                - เพิ่มการสั่นตามแรงฟัน หรือมีแรงต้านจากดาบ จะเพิ่มความสมจริงมากขึ้น <br />
                                - เพิ่มโหมด co-op ให้เล่นด้วยกันแบบ real-time <br />
                                - เพิ่ม gesture-based navigation  เพื่อแนะนำผู้เล่น
                            </p>
            <strong>Case Study #Robo Recall</strong>
                            <br />
                            <p>
                                1.What is the app main object interaction method? <br />
                                - ผู้เล่นสามารถ Control ตัวละครโดยใช้ทั้งสองมือได้ <br />
                                - กำจัดหุ่นจักรกลที่ถูกแสดงก่อนที่ตัวละครของตนเองจะถูกโจมตี
                            </p>
                            <p>
                                2.How is the app menu system?
                                - มี UIที่จะใช้ Control ที่มี Laser ไปชี้ Option ที่จะกระทำได้ <br />
                                - หน้าต่าง UI
                            </p>
                            <p>
                                3.What is the traveling technique use in the app? <br />
                                - การเดินทางที่ใช้ใน Game จะเป็นการ Teleport ตัวละครไปยังตำแหน่งต่างๆ
                            </p>
                            <p>
                                4.What about sound, is it 3D spatial sound? <br />
                                - ทุกการกระทำที่สำคัญจะมีเสียง Effect อย่าง Item การยิงหรือเสียง <br />
                                - เมื่อมีกระสุนของหุ่นจักรกลกำลังจะโจมตีรับรู้ได้ว่าเสียงกำลังอยู่ใกล้หรือไกล
                            </p>
                            <p>
                                5.Discuss what is good or bad about the game you tried? <br />
                                - ข้อดี <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;1. สามารถควบคุมอาวุธในเกมได้ง่าย <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;2. User Interface มีความเรียบง่ายไม่ซับซ้อนในการทำความเข้าใจ <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;3. ไม่ต้องใช้ Movement มากขนาดนั้นเพียงแค่รอ Enemy เข้าหาตัว <br />
                                - ข้อเสีย <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;1. ไม่สามารถหลบการโจมตีของศัตรูได้ <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;2. เมื่ออยู่ในด่านในการถืออาวุธไม่มี Laser คอยชี้วัตถุทำให้ความแม่นยำน้อยลง <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;3. ไม่มีปุ่มในการหยุดการเล่นชั่วคราว
                            </p>
                            <p>
                                6.How to make it better? <br />
                                - เพิ่ม Movement ในการหลบ Enemy มากกว่าการใช้ Teleport <br />
                                - เพิ่ม Laser บนอาวุธเพื่อเพิ่มความแม่นยำในการใช้งานมาขึ้น <br />
                                - สร้างปุ่มหรือเพิ่มการทำงานที่จะสามารถทำให้ผู้ใช้งานหยุดการเล่นได้ชั่วคราว
                            </p>
                        </pre>`
    },
    {
        slug: "evaluation-method",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/evaluation.jpg" alt="Evaluation Method" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; วิธีการประเมินค่า Project หรือ Prototype ที่เราทำนั้นว่ามีคุณค่าเป็นอย่างไรแล้วมีชุดคำถามแบบไหนเป็นสิ่งที่จะต้องคำนึงถึงเพื่อที่เราจะได้รู้จักวิธีการประเมินค่าผลงานของเราได้ถูกต้องซึ่งเบื้องต้นเราจะต้องมาทำความรู้จักกับ <b>Research Methods</b> ซึ่งมีอยู่ด้วยกัน 2 แบบ 1. Theoretical Research 2. Empirical Research โดยที่เราจะโฟกัสการ Research ในรูปแบบ Empirical Research
                        </p>
                        <strong>Empirical Research คืออะไร ?</strong>
                        <ul>
                            <li>เป็นการเปรียบเทียบกับ Theoretical Research</li>
                            <li>อาศัยการสังเกตหรือประสบการณ์</li>
                            <li>อาศัยเพียงการสังเกตหรือประสบการณ์โดยไม่ต้องคำนึงถึงทฤษฎี</li>
                            <li>สามารถยืนยันหรือหักล้างได้ด้วยการาสังเกตหรือทดลอง</li>
                        </ul>
                        <p>ใน HCI การสังเกตหรือจากประสบการณ์ scope มีแค่มนุษย์ interact กับ computer หรือเทคโนโลยีบางประเภท</p>
                        <strong>ทำไมเราถึงต้อทำการ Empirical Research ?</strong>
                        <ul>
                            <li>เพื่อตอบและตั้งคำถามเกี่ยวกับการออกแบบ user interface ใหม่ หรือเทคนิคในการ interaction</li>
                            <li>เพื่อค้นหาความสัมพันธ์ระหว่างเหตุและผล</li>
                            <li>เพื่อเปลี่ยนความคิดเห็นที่ไม่มีมูลความจริงให้เป็นความคิดเห็นที่มีหลักฐานและข้อมูลสนับสนุน</li>
                            <li>เพื่อพัฒนาหรือทดสอบสมมติฐานที่ทำไว้ที่อธิบายไว้ถึงการทำนายพฤติกรรมของมนุษย์ที่โต้ตอบกับคอมพิวเตอร์</li>
                        </ul>
                        <strong>แล้วเราจะทำการ Empirical Research อย่างไร ?</strong>
                        <ul>
                            <li>ทำผ่านกระบวนการสอบถามหรือสืบค้นความเป็นไปได้ตามหลักการทางวิทยาศาสตร์</li>
                            <li>
                                <details>
                                    <summary
                                        style={{ fontFamily: "Noto Sans Thai, sans-serif" }}
                                    >หลักการทางวิทยาศาสตร์</summary>
                                    <ul>
                                        <li>การรับรู้และการกำหนดปัญหา</li>
                                        <li>การกำหนดและทดสอบสมมติฐานที่ตั้ง</li>
                                        <li>การรวบรวมข้อมูลผ่านการสังเกตและทดลอง</li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        <strong>ข้อย้ำเตือน</strong>
                        <ul>
                            <li>ในการทำวิจัยเราไม่ได้พิสูจน์สิ่งใดๆ</li>
                            <li>
                                เราเพียงแค่รวบรวมและทดสอบหลักฐาน
                                <ul>
                                    <li>เป็นเรื่องที่ยังไม่ได้รับการพิสูจน์</li>
                                    <li>พิสูจน์ว่าบางอย่างมีแนวโน้มจะเป็นจริงตามหลักความน่าจะเป็น</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            <b>ALLEN NEWELL</b> ได้กล่าวไว้ว่า "วิทยาศาสตร์คือวิธีการ อย่างอื่นเป็นเพียงแค่คำอธิบาย"
                        </p>
                        <p>
                            <b>Empirical Research</b> สามารถแบ่งได้ 3 วิธีการ
                            <ul>
                                <li>Observational Method</li>
                                <li>Correlational Method</li>
                                <li>Experimental Method</li>
                            </ul>
                        </p>
                        <strong>การทำ Observational Method</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; มุ่งเน้นการประเมินเชิงคุณภาพระหว่างความเกี่ยวข้องและความถูกต้องซึ่งความเกี่ยวข้องแปรผกผันกับความถูกต้องและจุดมุ่งหมายของ Method นี้คือ การค้นพบและอธิบายเหตุผลเบื้องหลังพฤติกรรมของมนุษย์
                        </p>
                        <details>
                            <summary>ตัวอย่าง Observational Method</summary>
                            <p>การสัมภาษณ์, การสืบสวน, การสอบถาม, การศึกษา, การเล่าเรื่อง, การเดินสำรวจและอื่นๆ</p>
                        </details><br /><br />
                        <strong>การทำ Correlational Method</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เป็นการมองหาความสัมพันธ์ระหว่างตัวแปร
                        </p>
                        <ul>
                            <li>
                                จากการสังเกตและข้อมูลที่รวบรวม เช่น การตั้งค่าความเป็นส่วนตัวของ user ที่ใช้ social media มีความสัมพันธ์กับอายุ เพศ ระดับการศึกษาและอื่นๆ หรือไม่
                            </li>
                            <li>
                                ไม่ได้มาจากการทดลองแต่มาจาก การสัมภาษณ์, การสำรวจออนไลน์และแบบสอบถาม
                            </li>
                        </ul>
                        <strong>การทำ Experimental Method</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เป็นการทดลองโดยควบคุมสถาวะต่างๆ ในห้องปฏิบัติการ ซึ่งในวิชา HCI มักใช้ใน User Study มุ่งเน้นที่การประเมินเชิงคุณภาพโดยคาดหวังให้มี low relevance, high in precision รวมถึงมีข้อสรุปเชิงเหตุและผลถ้าเป็นไปได้และอย่างน้อยจะต้องมี 2 ตัวแปรคือ
                        </p>
                        <ul>
                            <li>Manipulated variable</li>
                            <li>Response variable</li>
                        </ul>
                        <strong>Internal validity & External validity</strong>
                        <ul>
                            <li>
                                <details>
                                    <summary>Internal validity</summary>
                                    <ul>
                                        <li>เป็นขอบเขตที่สังเกตจากเงื่อนไขการทดสอบ เช่น Condition A และ Condition B</li>
                                        <li>High internal validity หมายถึงมีความแตกต่างของค่าเฉลี่ยจริงและเกิดจากคุณสมบัติที่ต่างกันของการทดสอบ</li>
                                        <li>ความแปรปรวนเกิดจากความโน้มเอียงของผู้เข้าร่วมหรือได้รับการควบคุมเท่าๆ กันในเงื่อนไขของการทดสอบ</li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>External validity</summary>
                                    <ul>
                                        <li>ความสามารถที่ผลลัพธ์จะนำไปใช้กับสถานการณ์อื่นๆ ได้ซึ่งมีเกี่้ยวกับผู้คนและสถานการณ์</li>
                                        <li>High external validity
หมายถึงผู้เข้าร่วมการวิจัยเป็นตัวอย่างของกลุ่มผู้ใช้เป้าหมายในวงกว้างอยย่างเหมาะสม</li>
                                        <li>สภาพแวดล้อมของการทดสอบและขั้นตอนการทดลองจะเป็นตัวอย่างของสถานการณ์ของโลกจริงที่ถูกสร้างโดย interface หรือเทคนิคต่างๆ</li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        <strong>Scales of measurement</strong>
                        <p>เรียงลำดับจากความละเอียดน้อยไปมาก คือ Nominal, Ordinal, Interval และ Ratio</p>
                        <strong>Research Question</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ชุดแบบคำถามควรที่จะพิจารณาจากงานวิจัยหรือชุดคำถามที่ได้รัะบการยอมรับแล้วเช่น คำถามเกี่ยวกับการยอมรับเทคโนโลยีและควรเป็นคำถามที่สามารถทดสอบได้
                        </p>
                        <strong>Designing and HCI Experiments</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; การเรียนรู้ในการจัดการและออกแบบการทดลองเป็นทักษะที่จำเป็นสำหรับนักวิจัย HCI ซึ่งการออกแบบการทดลองเป็นกระบวนการที่จะตัดสินใจว่า จะทำภารกิจหรือขั้นตอนและอื่นๆ กับผู้ที่เข้าร่วมอย่างไร
                        </p>
                        <strong>Method</strong>
                        <p>เป็นวิธีการออกแบบและดำเนินการทดลอง ซึ่งมีความสำคัญเป็นอย่างมากไม่ควรที่จะคิดขึ้นมาเองเพียงเพราะมีความสมเหตุสมผลแต่ควรปฏิบัตืตามมาตรฐานการทดลองที่เป็นมนุษย์</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; <b>จากการสรุปดังกล่าว</b> ทำให้สมาชิกภายในกลุ่มได้ร่วมกันทำเอกสารชี้แจงข้อมูลโครงการที่มีการคิดออกแบบวิธีการทดลองแบบจำลอง Iris Vision ซึ่งจะต้องชี้แจงให้ละเอียดและมีความเกี่ยวข้องกับหลักการในการประเมินทั้ง Baseline Condition และ Test Condition และข้อคำถามนั้นเป็นไปตามแบบชุดคำถามการยอมรับเทคโนโลยีของ TAM โดยสามารถแบ่งออกเป็นหมวดหมู่ได้ 4 หมวดหมู่ คือ ชุดคำถามประเมินเกี่ยวกับประสิทธิภาพและผลลัพธ์ของการใช้งาน, ความง่ายและการเรียนรู้ในการใช้งาน, การรับรู้และการโต้ตอบขณะใช้งานและความยืดหยุ่นและการปรับตัว</p>`
    },
    {
        slug: "data-visualization&information-architechture",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/data-visualization.jpg" alt="Data Visualization" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากการเรียนรู้ในเรื่องของ Visual Concept and Data Visualization และ Visual Design and Information Archiechture แล้วทำให้รู้ว่าการออกแบบ User Interface โดยที่ไม่ได้อาศัยหลักการที่เป็นมาตรฐานหรือเกิดจากความชอบส่วนตัวนั้นอาจเป็นสิ่งที่ไม่ถูกต้องซึ่งจะส่งผลทำให้ user คนอื่นไม่ได้ประทับใจหรือพึงพอใจเหมือนความคิดของตนเอง ดังนั้นเราในเนื้อหานี้จึงเป็นเรื่องที่สำคัญต่อการศึกษาโดยจะเริ่มต้นจาก Visual Concept and Data Visualization
                        </p>
                        <strong>Understanding HCI</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ก่อนที่จะเข้าเนื้อเรื่องเรามาทบทวนกันก่อนว่าบทบาทของ HCI มีบทบาทสำคัญอย่างไรต่อ Software ? คำตอบคือ HCI สามารถเพิ่มประสบการณ์ของ user โดยมุ่งเน้นที่หลักการใช้งาน, การเข้าถึงข้อมูลและออกแบบ user-contric ซึ่งมีความเชื่อมโยงระหว่างวิทยาการคอมพิวเตอร์และวิทยาศาสตร์พฤติกรรมเข้าด้วยกัน
                        </p>
                        <strong>Visual Concept And Data Visualization</strong>
                        <ul>
                            <li>
                                <b>Human Perception in HCI</b>
                                <p>Visual Perception เป็นวิธีที่บุุคคลตีความ Visual ที่เห็นซึ่งส่งผลต่อการใช้งาน interface และการออกแบบที่มีประสิทธิภาพจะช่วยลดความเครียดทางสายตาและรองรับกระบวนการทางปัญญาซึ่งวิธีการออกแบบสามารถใช้ Cognitice Load ซึ่งเป็นความพยายามทางจิตใจในการประมวลผล interface ซึ่งการลดความซับซ้อนของ visual จะช่วยให้ทำความเข้าใจได้ถูกต้องและปรับปรุงประสบการณ์ของผู้ใช้งานโดยรวม</p>
                            </li>
                            <li>
                                <b>Shneiderman's design rules</b>
                                <p>กฎของ Shneiderman จะโฟกัสในเรื่องของความสม่ำเสมอ ข้อเสนอแนะ การป้องกันข้อผิดพลาดในการออกแบบ UX/UI ซึ่งการปฏิบัติตามแนวทางนี้จะทำให้ช่วยเพิ่มความพึงพอใจของ user ที่มี user interface ที่ใช้งานง่ายสอดคล้องกับความคาดหวังของ user</p>
                            </li>
                            <li>
                                <b>Visual hierarchy principles</b>
                                <ul>
                                    <li>
                                        <b>Size and Scale</b> ในการออกแบบ element ที่สำคัญจะต้องมีความดึงดูดความน่าสนใจ
                                    </li>
                                    <li>
                                        <b>Color and Contrast</b> ความกลมกลืนและการตัดกันของสีจะมีความดึงดูดต่อความสนใจของ user และปรับปรุงการเข้าถึง interaction
                                    </li>
                                    <li>
                                        <b>Typography and Space</b> รูปแบบของ font และระยะของ Content สามารถปรับปรุงการอ่านและแนะนำ user ได้
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Visual Aesthetics</b>
                                <p>การออกแบบองค์ประกอบในการใช้งานอาศัยหลักการของ visual aesthetics เป็นสิ่งที่ครอบคลุมทั้งสี เค้าโครงและตัวอักษร ซึ่งมีผลกระทบต่อความพึงพอใจของ user ในส่วนรวมและการออกแบบที่มีความใส่ใจจะอำนวยความสะดวกในการทำความเข้าใจและปรับปรุง UX โดยรวม</p>
                            </li>
                            <li>
                                <b>Accessibility in design</b>
                                <p>ควรพิจารณาสำหรับผู้ที่มีภาวะการมองเห็นสีไม่ชัดเจนซึ่ง interface ที่ออกแบบจะต้องใช้หลักการของสีที่มีความชัดเจน</p>
                            </li>
                            <li>
                                <b>Data visualization types</b>
                                <ul>
                                    <li>
                                        <b>Comparison Charts</b> ประยุกต์ใช้แผนภูมิต่างๆ ไม่ว่าจะเป็นแผนภูมิกราฟแท่ง วงกลม หรืออื่นๆ เพื่อเปรียบเทียบข้อมูลได้อย่างมีประสิทธิภาพ
                                    </li>
                                    <li>
                                        <b>Distribution Visuals</b> ใช้ประโยชน์จากการวิเคราะห์เชิงสถิติไม่ว่าจะเป็น histograms, box plots และอื่นๆ
                                    </li>
                                    <li>
                                        <b>Specialized Charts</b> ตัดสินใจในการใช้แผนภูมิให้เหมาะสมกับข้อมูล
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Encoding principles</b>
                                <ul>
                                    <li>
                                        <b>Color Theory</b> การใช้ความหมายของสีและเลือกสีที่ใช้งานได้ถูกต้องจะทำให้มีความชัดเจนและการมีส่วมร่วมของ user
                                    </li>
                                    <li>
                                        <b>Visual Encoding types</b> ตำแหน่ง, รูปร่างและขนาดถ่ายทอดข้อมูลที่เป็นระบบทำให้ตีความได้อย่างแม่นยำ
                                    </li>
                                    <li>
                                        <b>Gestalt principles in visualization</b> หลักการของ Gestalt จะทำให้นำเสนอข้อมูลได้อย่างมีประสิทธิภาพ ใช้ประโยชน์จากการรับรู้ของมนุษย์เพื่อเพิ่มความเข้าใจ
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Computer Graphics in Visualization</b>
                                <ul>
                                    <li>
                                        <b>Rendering Pipeline</b> การแปลงเนื้อหา 3D เป็น 2D เป็นสิ่งที่จำเป็นในการแสดงข้อมูลที่ซับซ้อน
                                    </li>
                                    <li>
                                        <b>Transformations & Coordinate Systems</b> เป็นสิ่งที่สามารถจัดการและวาง object ได้อย่างแม่นยำเป็น key ในการแสดงภาพ graphic อย่างแม่นยำ
                                    </li>
                                    <li>
                                        <b>Interactive Data Visualization Benefits</b> ดึงดูด user ให้มีส่วนร่วมเพื่ิวิเคราะห์และรับการปรับปรุงการนำเสนอข้อมูลเชิงลึก
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>UI Design Principles</b>
                                <p>การทำ Integrating Visualizations เป็นการใส่ข้อมูลที่เป็นภาพ (หรือกราฟิก) ลงในหน้าต่างของแอปหรือเว็บไซต์อย่างลื่นไหล โดยทำให้ประสบการณ์ของผู้ใช้งานดูกลมกลืน และสามารถใช้งานหรือหาทางไปได้อย่างง่ายดาย และควรทำให้มีความ Responsive ต่ออุปกรณ์หลายๆ ชนิด</p>
                            </li>
                            <li>
                                <b>Emerging Visualization Trends</b>
                                <ul>
                                    <li>
                                        <b>Immersive Analytics</b> การนำเทคโนโลยีอย่าง XR มาร่วมใช้จะทำให้ได้รับประสบการณ์ที่แปลกใหม่
                                    </li>
                                    <li>
                                        <b>Personalized Visualization</b> ปรับแต่ง interface ให้เหมาะสมกับความต้องการของแต่ละบุคคุล
                                    </li>
                                    <li>
                                        <b>AI in Storytelling</b> นำ AI เข้ามาช่วยสร้างเรื่องราวให้น่าสนใจ เพื่อให้เข้าถึงได้ง่ายและดึงดูดผู้ใช้งานมากขึ้น
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <strong>Visual Design And Information Architechture</strong>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; ในส่วนนี้จะอธิบายถึงการออกแบบ User Interface ในเชิงลึกที่จะทำให้เราสามารถออกแบบและเพิ่มประสบการณ์ให้กับ user ได้อย่างมีประสิทธิภาพ
                        </p>
                        <ul>
                            <li>
                                <b>Typography in UI Design</b>
                                <ul>
                                    <li>
                                        <b>Readability</b> ความสามารถในการอ่านจะขึ้นอยู่กับ font, size, case, line spacing และ contrast ของ text
                                    </li>
                                    <li>
                                        <b>Scannability Techniques</b> ความสามารถในการสแกนข้อมูลหรือเนื้อหาอย่างรวดเร็วไม่ว่าจะเป็น หัวข้อ รายการ เนื้อหาและอื่นๆ
                                    </li>
                                    <li>
                                        <b>Visual Hierarchy and Mood</b> การจัดลำดับความสำคัญจะช่วยนำสายตาของ user โดยใช้ font, ปรับ weight ของ text และ style ของ text มีผลต่อารมณ์และความรู้สึกของ user
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b>Color Theory in UI Design</b>
                                <p>ทฤษฎีของสีมีอิทธิพลต่อการรับรู้และกระตุ้นอารมณ์ของ user ซึ่งสีที่จะใช้ควรที่จะมีความสอดคล้องกับเอกลักษณ์ของ brand และควรที่จะเข้าใจ relation ของวงล้อสี</p>
                            </li>
                        </ul>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>จากข้อสรุปดังกล่าว</b> ยังมีหลักการและแนวคิดอีกหลากหลายที่เราควรจะรู้เพิ่มเติมแต่ในเบื้องต้นผมก็คิดว่าในการทำ User Interface ในการแสดงข้อมูลโดยเฉพาะเวลาทำหน้า Dashboard ควรที่จะมีข้อมูลที่เหมาะสมตามหลักในการทำ Data Visualization และความน่าสนใจของข้อมูลคือการนำวิธีการทางสถิติมาร่วมประเมินในการตัดสินใจซึ่งจะเป็นสิ่งที่ควรมีรวมถึงเรื่องอื่นๆ ของ User Interface เช่น font, color, tone, size, layout
                        </p>`
    },
    {
        slug: "hypothesis-testing",
        code: `                        <div className="main-content-image">
                            <img src="/assets/images/blog_image/statistic.jpg" alt="statistic" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; เมื่อเราทำโครงการและมีการเก็บข้อมูลแบบสอบถามที่เป็นชุดคำถามตามมาตรฐานต่างๆ เช่น แบบจำลองการยอมรับเทคโนโลยี (Technology Acceptance Model - TAM) คำถามเหล่านี้สามารถใช้วัด Baseline Condition และ Test Condition ได้ซึ่งการประเมินถึงความแตกต่างก็จะมีวิธีการทางสถิติซึ่งรวมถึงข้อมูลชนิดอื่นๆ ก็จะมีวิธีการแตกต่างกันโดยเราสามารถศึกษาได้ในเรื่องของ Hypothesis Testing
                        </p>
                        <strong>Hypothesis Testing คืออะไร ?</strong>
                        <p>
                            เป็นการใช้วิธีการทางสถิติเพื่อรายงานคำตอบจาก research question ที่ได้ทำขึ้น ซึ่งประเภทของข้อมูล research question มีรูปแบบที่แตกต่างกันขึ้นอยู่กับว่าเราเก็บข้อมูลในลักษณะแบบไหนโดยสามารถดูได้จาก Measurement Scales
                        </p>
                        <strong>Measurement Scale</strong>
                        <ul>
                            <li>
                                <b>Nominal</b> ข้อมูลส่วนใหญ่เป็นการจำแนกกลุ่มหรือประเภท เช่น เพศ สี ประเทศ ไม่มีลำดับหรือข้อมูลเชิงปริมาณ
                            </li>
                            <li>
                                <b>Ordinal</b> ข้อมูลที่มีลำดับ เช่น ระดับความพึงพอใจ (มาก - น้อย) แต่ระยะห่างระหว่างอันดับไม่แน่นอน
                            </li>
                            <li>
                                <b>Interval</b> ข้อมูลมีลำดับ เช่น ค่าคงที่ต่างๆ อุณหภูมิ
                            </li>
                            <li>
                                <b>Ratio</b> เป็นระดับที่มีทุกคุณสมบัติ เช่น ความยาว, น้ำหนัก, อายุ และอื่นๆ
                            </li>
                        </ul>
                        <p>ในแต่ละประเภทของข้อมูลก็จะมีวิธีการคำนวณที่แตกต่างกันซึ่งจะแบ่งออกได้เป็น 2 ประเภทหลัก คือ 1. Parametric 2. Non-parametric</p>
                        <ul>
                            <li>
                                <b>Parametric</b>
                                <ul>
                                    <li>วิเคราะห์ความแปรปรวนได้จาก ANOVA ซึ่งเป็นโปรแกรมในการคำนวณเชิงสถิติ ซึ่งใช้ข้อมูลอัตราส่วนและข้อมูลช่วงและพบ statistical precedure บ่อยๆ ในงานวิจัยของ HCI</li>
                                </ul>
                            </li>
                            <li>
                                <b>Non-parametric</b>
                                <ul>
                                    <li>
                                        <b>Chi-square test</b> ใช้กับข้อมูลประเภท Nominal
                                    </li>
                                    <li>
                                        <b>Mann-Whitney U, Wilcoxon Signed-Rank, Kruskal-Wallis และ Friedman tests</b> ใช้สำหรับข้อมูลประเภท Ordinal
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <strong>ทำไมเราถึงต้องหาค่าความแปรปรวน ?</strong>
                        <p>
                            เพื่อที่เราจะสามารถสรุปหรือบ่งบอกได้ว่า Method A และ Method B มีความต่างกันอย่างไรอะไรดีกว่ากันและมีความต่างกันมากแค่ไหน
                        </p>
                        <strong>Student Exercises</strong>
                        <ul><li><b>Exercise 1</b></li></ul>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-hypothesis/exercises_1.jpg" alt="exercise1" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากการวิเคราะห์ความแปรปรวนโดยใช้วิธีแบบ ANOVA เนื่องจากข้อมูลนี้เป็นข้อมูลประเภท Ratio ซึ่งได้เปรียบเทียบ Texting Speed (wpm) ระหว่างการนั่งและเดิน พบว่าไม่มีความแตกต่างอย่างมีนัยสำคัญเนื่องจาก F(1, 7) = 2.113, p = 0.1894 ซึ่ง p มากกว่า .05 จึงหาข้อสรุปของความต่างหรือบ่งบอกว่าแบบไหนดีกว่ากันไม่ได้
                        </p>
                        <ul><li><b>Exercise 2</b></li></ul>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-hypothesis/exercises_2.jpg" alt="exercise1" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากการวิเคราะห์ความแปรปรวนโดยใช้วิธีแบบ ANOVA เนื่องจากข้อมูลนี้เป็นข้อมูลประเภท Ratio ซึ่งได้เปรียบเทียบ Mean Driving Error (pixels) โดย มี 3 กรณีคือ No Distraction, Call Answering และ Text Messaging พบว่ามีความแตกต่างอย่างมีนัยสำคัญเนื่องจาก F = 6.490, p = 0.006088 ซึ่ง p น้อยกว่า .05 และ เมื่อพิจารณาค่าเฉลี่ยของความผิดพลาด พบว่า เงื่อนไข Text Messaging มีค่า Driving Error สูงสุด (Mean = 14.25 pixels) มากกว่า Call Answering (Mean = 11.08 pixels) และ No Distraction (Mean = 10.75 pixels) แต่จาก ANOVA จะเป็นความแตกต่างโดยรวมถ้าต้องการเปรียบเทียบทีละเงื่อนไขจะพบว่าเมื่อใช้วิธีการแบบ Post Hoc คู่ที่มีความต่างกันอย่างมีนัยสำคัญคือ 1 กับ 3 และ 2 กับ 3
                        </p>
                        <ul><li><b>Exercise 3</b></li></ul>
                        <div className="sub-image-detail">
                            <img src="/assets/images/blog_image/blog-hypothesis/exercises_3.jpg" alt="exercise1" />
                        </div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; จากการวิเคราะห์ความแปรปรวนโดยใช้วิธีแบบ ANOVA เนื่องจากข้อมูลนี้เป็นข้อมูลประเภท Ratio ซึ่งได้เปรียบเทียบจำนวนคำที่เด็กพูดทั้ง 2 เงื่อนไขคือ Waggy และ Scratchy พบว่ามีความแตกต่างอย่างมีนัยสำคัญเนื่องจาก F(1, 7) = 13.455, p = 0.0080 ซึ่ง p น้อยกว่า .01
                        </p>`
    },
    {
        slug: "social-interaction",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/social-interaction.jpg" alt="" />
                        </div>
                        <strong>Social Interaction คืออะไร ?</strong>
                        <p>
                            ในชีวิตประจำวันของเรานั้นมักต้องใช้ชีวิตร่วมกันกับครอบครัว ทำงานร่วมกับทีม เล่นเกมกับผู้อื่นบนโลกออนไลน์ พูดคุยกับคนอื่นรวมถึงการเข้าสังคมซึ่งสิ่งเหล่านี้ล้วนเรียกว่า Social Interaction และเทคโนโลยีก็ได้ถูกพัฒนามาอำนวยในการให้เราเข้าสังคมในระยะไกลหรือบนโลกออนไลน์ได้
                        </p>
                        <strong>Conversational Mechanisms</strong>
                        <p>ในการสนทนากันแบบเห็นหน้ากันมักจะมีกลไกหรือกฏเกณฑ์ต่างๆ ที่เรานั้นได้กระทำซึ่งประกอบไปด้วยดังนี้</p>
                        <ul>
                            <li>
                                <b>Conversational Rules จาก Sacks et al.(1978)</b>
                                <ul>
                                    <li>ผู้พูดมักจะเลือกผู้พูดคนต่อไปโดยการถามความคิดเห็น คำถาม หรือ คำขอ</li>
                                    <li>คนอื่นอาจแทรกพูดได้</li>
                                    <li>ผู้พูดคนเดิมพูดต่อได้</li>
                                    <li>มีการผลัดกันพูดเพื่อประสานงาน</li>
                                    <li>การส่งสัญญาณบางอย่างและดำเนินการต่อ</li>
                                </ul>
                            </li>
                            <li>
                                <b>Further Conversational Rules</b>
                                <ul>
                                    <li>การเอ่ยคำลาต่างๆ</li>
                                    <li>การแสดงสัญญาณโดยนัยหรือปฏิกิริยาบางอย่าง</li>
                                </ul>
                            </li>
                        </ul>
                        <p>จากการพิจารณาสิ่งเหล่านี้จะทำให้เราได้รับทราบถึงสิ่งที่ผู้อื่นกำลังกระทำหรือผู้อื่นแจ้งให้เราทราบว่าเรากำลังทำอะไรถือว่าเป็นแง่ที่สำคัญในการทำงานร่วมกับผู้อื่นและเป็นการเข้าสังคม</p>
                        <strong>Telepresence & Social Presence</strong>
                        <ul>
                            <li>
                                <b>Telepresence</b> เป็นการรู้สึกว่าฝ่ายตรงข้ามอยู่ร่วมสถานที่เดียวกัน
                            </li>
                            <li>
                                <b>Social Presence</b> เป็นการทำให้รู้สึกว่ากำลังสื่อสารกับคนจริงๆ ถึงแม้ว่าจะอยู่ในโลกเสมือน
                            </li>
                        </ul>
                        <p>จากความรู้สึกในข้างต้นเรามักจะพบเทคโนโลยีจำนวนมากที่ได้ถูกสร้างขึ้นเพื่อให้เราสื่อสารกันระยะไกลแต่ทำให้เหมือนว่าอยู่ใกล้กัน มีตัวตนเหมือนจริงหรือแม้แต่ในโลกเสมือน</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>สรุปจากข้างต้น</b> Social Media ได้เข้ามามีบทบาทกับชีวิตประจำวันของมนุษย์มากมายในการสื่อสารในแง่มุมต่างๆ ตามที่ต้องกันหรือแม้แต่เทคโนโลยีบางอย่างก็สามารถทำเสมือนว่ามีบุคคลอยู่ในสถานที่ที่เดียวกับตนเอง
                        </p>`
    },
    {
        slug: "future-directions-in-hci",
        code: `<div className="main-content-image">
                            <img src="/assets/images/blog_image/future.jpg" alt="comprass" />
                        </div>
                        <strong>Human-centered AI</strong>
                        <ul>
                            <li>ออกแบบ AI ที่สามารถเข้าใจมนุษย์หรือเป็นการคาดเดาเจตนา ตอบสนองตามอารมณ์ เช่น ระบบตรวจจับอารมณ์จากเสียงและใบหน้า แชทบอทที่ตอบได้อย่างเป็นธรรมชาติ</li>
                            <li>มีความ Amplify, Augment, Empower & Enhance People</li>
                            <li>มีหลักการของ HCAI Framework เข้ามาร่วมใช้งาน</li>
                        </ul>
                        <strong>Augmented Human</strong>
                        <p>เทคโนโลยีที่จะสามารถเพิ่มความสามารถของมนุษย์ เช่น Software ต่างๆที่อำนวย Smartwatch และอื่นๆ ที่มีความเกี่ยวข้องกับการเสริมในด้านกายภาพ</p>
                        <strong>Head-up Computing XR</strong>
                        <p>ส่วนใหญ่เราใช้เวลาในการจดจ่ออยู่กับมือถือ แล็ปท็อป หรือแท็บเล็ตเป็นเวลาหลายชั่วโมงต่อวัน แต่ในโลกเทคโนโลยีที่กำลังก้าวไปข้างหน้าอย่างรวดเร็ว แนวคิด “Head-up Computing” กำลังเข้ามาเปลี่ยนวิธีที่เรามีปฏิสัมพันธ์กับข้อมูล — ยกข้อมูลขึ้นมาอยู่ “ตรงหน้าเรา” โดยไม่ต้องก้มมองจอ เช่น การใช้ VR Headset</p>
                        <strong>Programmable Materials</strong>
                        <p>วัสดุที่สามารถ "ตั้งโปรแกรม" ให้ เปลี่ยนรูปร่าง พฤติกรรม หรือหน้าที่ ได้ด้วยตัวเอง </p>
                        <strong>Beyond Questionnaire and User Studies</strong>
                        <p>สายงาน Human-Computer Interaction (HCI) หรือ UX/UI เราคุ้นเคยกับการเก็บข้อมูลจาก แบบสอบถาม (Questionnaires) และ การศึกษาผู้ใช้ (User Studies) เพื่อวัดความพึงพอใจและประสิทธิภาพของการใช้งาน แต่ในโลกยุคใหม่ที่ผู้ใช้มีพฤติกรรมซับซ้อนและมีบริบทที่เปลี่ยนแปลงตลอดเวลา แค่คำถามปลายปิดอาจไม่เพียงพออีกต่อไป</p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>จากข้อสรุปดังกล่าว</b> Future Directions in HCI กำลังมุ่งสู่การสร้างประสบการณ์การโต้ตอบที่เป็นธรรมชาติมากขึ้น โดยเน้นให้เทคโนโลยีเข้าใจและตอบสนองผู้ใช้ได้อย่างชาญฉลาดผ่าน AI และระบบที่ปรับเปลี่ยนตามบริบท เช่น การใช้เสียง ท่าทาง หรือแม้แต่คลื่นสมองในการควบคุมอุปกรณ์ (Brain-Computer Interface) นอกจากนี้ แนวคิด Augmented Human ยังทำให้เทคโนโลยีสามารถเสริมความสามารถของมนุษย์ ทั้งทางร่างกายและจิตใจ ขณะที่ XR (Extended Reality) อย่าง AR/VR ก็เข้ามามีบทบาทสำคัญในการเชื่อมโลกจริงกับโลกดิจิทัลให้กลมกลืนมากยิ่งขึ้น ทั้งหมดนี้สะท้อนว่าอนาคตของ HCI จะไม่ใช่แค่เรื่องการออกแบบหน้าจอ แต่คือการออกแบบวิธีที่มนุษย์และเทคโนโลยีอยู่ร่วมกันอย่างไร้รอยต่อในชีวิตประจำวัน
                        </p>`
    }
];