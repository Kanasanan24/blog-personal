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
    }
];