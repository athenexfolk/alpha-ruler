import { Content } from "../../models/content";

export const NaturalNumberData: Content[] = [
    {
        id: "natnum1",
        topic: "ความหมายของจำนวนนับ",
        data: `
                <p>จำนวนนับ (counting number) หรือจำนวนธรรมชาติ (natural number) หมายถึง จำนวนที่ใช้นับสิ่งของต่าง ๆ อันได้แก่ $$1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...$$</p>
                <p>โดยจำนวนนับสามารถแบ่งออกได้เป็นอีกสองประเภท ได้แก่ จำนวนคี่ (odd number) และจำนวนคู่ (even number)</p>
                <ul>
                    <li>จำนวนคี่ หมายถึง จำนวนนับที่หารด้วย $2$ ไม่ลงตัว ได้แก่ $$1, 3, 5, 7, 9, 11, 13, 15, ...$$</li>
                    <li>จำนวนคู่ หมายถึง จำนวนนับที่หารด้วย $2$ ลงตัว ได้แก่ $$2, 4, 6, 8, 10, 12, 14, 16, ...$$</li>
                </ul>
              `
    },
    {
        id: "natnum2",
        topic: "ค่าประจำหลักและการกระจายของจำนวนนับ",
        data: `
                <div class="mb-2" style="overflow-x:auto;">
                    <table class="table text-center">
                        <thead>
                            <tr>
                            <th scope="col">...</th>
                            <th scope="col">หลักล้าน</th>
                            <th scope="col">หลักแสน</th>
                            <th scope="col">หลักหมื่น</th>
                            <th scope="col">หลักพัน</th>
                            <th scope="col">หลักร้อย</th>
                            <th scope="col">หลักสิบ</th>
                            <th scope="col">หลักหน่วย</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">...</th>
                            <td>$1,000,000$</td>
                            <td>$100,000$</td>
                            <td>$10,000$</td>
                            <td>$1,000$</td>
                            <td>$100$</td>
                            <td>$10$</td>
                            <td>$1$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-center">ตาราง A แสดงถึงชื่อของค่าประจำหลักและค่าประจำหลักของจำนวนนับ</p>
                <p>ซึ่งสามารถกระจายจำนวนนับ ได้ดังตัวอย่างต่อไปนี้</p>
                <div class="p-3">
                    <p>จงทำให้ $1,234$ อยู่ในรูปการกระจาย</p>
                    <div class="row">
                        <div class="col text-start">
                            <p>$1$ อยู่ในหลักพัน</p>
                            <p>$2$ อยู่ในหลักร้อย</p>
                            <p>$3$ อยู่ในหลักสิบ</p>
                            <p>$4$ อยู่ในหลักหน่วย</p>
                        </div>
                        <div class="col text-start">
                            <p>มีค่าเป็น $1\\times1,000$</p>
                            <p>มีค่าเป็น $2\\times100$</p>
                            <p>มีค่าเป็น $3\\times10$</p>
                            <p>มีค่าเป็น $4\\times1$</p>
                        </div>
                        <div class="col text-start">
                            <p>$=1,000$</p>
                            <p>$=200$</p>
                            <p>$=30$</p>
                            <p>$=4$</p>
                        </div>
                    </div>
                    <p>นั่นคือ $1,234$ เขียนในรูปการกระจายได้เป็น $$1,234=1,000+200+30+4$$</p>
                    <div class="mb-2" style="overflow-x:auto;">
                        <p>หรือ $$1,234=(1\\times1,000)+(2\\times100)+(3\\times10)+(4\\times1)$$</p>
                    </div>
                </div>
              `
    },
    {
        id: "natnum3",
        topic: "การเปรียบเทียบจำนวนนับ",
        data: `
                <p>ในการเปรียบเทียบจำนวนนับสองจำนวนใด ๆ ให้ทำการพิจารณาตามขั้นตอนต่อไปนี้</p>
                <ol>
                    <li>พิจารณาจำนวนหลัก จำนวนใดที่มีจำนวนหลักมากกว่า จะมีค่ามากกว่าอีกจำนวน</li>
                    <li>จากข้อ 1. หากจำนวนหลักเท่ากัน พิจารณาเลขโดดหลักหน้าสุด (หลักใหญ่สุด) จำนวนใดที่มีค่าเลขโดดหลักหน้าสุดมากกว่า จะมีค่ามากกว่าอีกจำนวน</li>
                    <li>จากข้อ 2. หากเลขโดดเท่ากัน พิจารณาเลขโดดหลักถัดไป จำนวนใดที่มีค่าเลขโดดมากกว่า จะมีค่ามากกว่าอีกจำนวน</li>
                    <li>จากข้อ 3. หากเลขโดดเท่ากัน ให้ทำข้อ 3. ซ้ำกับหลักถัด ๆ ไป จนได้ผลลัพธ์</li>
                </ol>
                <h5>ตัวอย่างของการเปรียบเทียบจำนวนนับ</h5>
                <div class="p-3">
                    <p>จงทำการเปรียบเทียบ $365$ กับ $36$ </p>
                    <p>เนื่องจาก $365$ มีจำนวนหลักมากกว่า $36$</p>
                    <p>ดังนั้น $365 \\gt 36$</p>
                </div>
                <div class="p-3">
                    <p>จงทำการเปรียบเทียบ $365$ กับ $364$ </p>
                    <p>เนื่องจาก $365$ มีจำนวนหลักเท่ากันกับ $364$</p>
                    <p>พิจารณาทีละหลัก</p>
                    <p>หลักร้อย เท่ากัน</p>
                    <p>หลักสิบ เท่ากัน</p>
                    <p>หลักหน่วย ไม่เท่ากัน และพบว่า $5 > 4$</p>
                    <p>ดังนั้น $365 \\gt 364$</p>
                </div>
              `
    },
    {
        id: "natnum4",
        topic: "การบวกจำนวนนับ",
        data: `
                <p>จำนวนนับสองจำนวน เมื่อจะกระทำการบวก ให้จำนวนนับจำนวนหนึ่งเป็นตัวตั้ง (สมมติเป็น $A$) แล้วเพิ่มค่าตามจำนวนนับอีกจำนวน (สมมติเป็น $B$)</p>
                <p>การบวก เขียนให้อยู่ในรูปสัญลักษณ์ได้เป็น $$A+B$$</p>
                <h5>ตัวอย่างของการบวกจำนวนนับ</h5>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $2+3$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/add1.svg">
                    </div>
                    <p>ดังนั้น $2+3$ ได้ผลลัพธ์เท่ากับ $5$ หรือ $2+3=5$</p>
                </div>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $8+12$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/add2.svg">
                    </div>
                    <p>ดังนั้น $8+12$ ได้ผลลัพธ์เท่ากับ $20$ หรือ $8+12=20$</p>
                </div>
              `
    },
    {
        id: "natnum5",
        topic: "การลบจำนวนนับ",
        data: `
                <p>จำนวนนับสองจำนวน เมื่อจะกระทำการลบ ให้จำนวนนับจำนวนหนึ่งเป็นตัวตั้ง (สมมติเป็น $A$) แล้วลดค่าตามจำนวนนับอีกจำนวน (สมมติเป็น $B$) โดยการที่ผลลัพธ์จะเป็นจำนวนนับได้ ตัวตั้งจะต้องมีค่ามากกว่าตัวลบ นั่นคือ $A \\gt B$</p>
                <p>การลบ เขียนให้อยู่ในรูปสัญลักษณ์ได้เป็น $$A-B$$</p>
                <h5>ตัวอย่างของการลบจำนวนนับ</h5>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $7-4$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/sub1.svg">
                    </div>
                    <p>ดังนั้น $7-4$ ได้ผลลัพธ์เท่ากับ $3$ หรือ $7-4=3$</p>
                </div>
                <div class="p-3">
                    <p>จงหาว่า ผลลัพธ์ของ $8-10$ เป็นจำนวนนับหรือไม่</p>
                    <p>เนื่องจาก $8<10$ ทำให้ผลลัพธ์ไม่เป็นจำนวนนับ ดังรูป</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/sub2.svg">
                    </div>
                    <p>ดังนั้น $8-10$ ได้ผลลัพธ์เท่ากับ $-2$ หรือ $8-10=-2$ ซึ่งไม่เป็นจำนวนนับ</p>
                </div>
              `
    },
    {
        id: "natnum6",
        topic: "การคูณจำนวนนับ",
        data: `
                <p>จำนวนนับสองจำนวน เมื่อจะกระทำการคูณ ให้จำนวนนับจำนวนหนึ่งเป็นตัวตั้ง (สมมติเป็น $A$) แล้วเพิ่มค่าหรือบวกจำนวนนั้นเป็นจำนวนเท่ากับจำนวนนับอีกจำนวน (สมมติเป็น $B$) </p>
                <p>การคูณ เขียนให้อยู่ในรูปสัญลักษณ์ได้เป็น $$A \\times B$$ หรือ $$A \\cdot B$$ ซึ่งมีค่าเท่ากับ $$\\underbrace{A+A+A+...+A}_\\text{B number(s)}$$</p>
                <h5>ตัวอย่างของการคูณจำนวนนับ</h5>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $6 \\times 3$</p>
                    <p>เนื่องจาก $6 \\times 3 = 6 + 6 + 6$ (นำ $6$ จำนวน $3$ ตัวมาบวกกัน)</p>
                    <p>ซึ่งสามารถหาผลลัพธ์ได้ดังรูป</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/mul1.svg">
                    </div>
                    <p>ดังนั้น $6 \\times 3$ ได้ผลลัพธ์เท่ากับ $18$ หรือ $6 \\times 3=18$</p>
                </div>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $2 \\times 1$</p>
                    <p>เนื่องจาก $2 \\times 1 = 2$ (นำ $2$ จำนวน $1$ ตัวมาบวกกัน)</p>
                    <p>ดังนั้น $2 \\times 1$ ได้ผลลัพธ์เท่ากับ $2$ หรือ $2 \\times 1=2$</p>
                </div>
              `
    },
    {
        id: "natnum7",
        topic: "การหารจำนวนนับ",
        data: `
                <p>จำนวนนับสองจำนวน เมื่อจะกระทำการหาร ให้จำนวนนับจำนวนหนึ่งเป็นตัวตั้ง (สมมติเป็น $A$) แล้วแบ่งค่าจำนวนนั้นออกเป็นกลุ่มที่แต่ละกลุ่มมีค่าจำนวนเท่ากับจำนวนนับอีกจำนวน (สมมติเป็น $B$) ซึ่งผลลัพธ์คือจำนวนกลุ่มที่ได้ (หากเป็นการหารลงตัว และอาจจะได้เศษของกลุ่มที่เหลือ หากเป็นการหารไม่ลงตัว)</p>
                <p>ผลลัพธ์จากการหารจำนวนนับ สามารถเป็นได้ทั้งจำนวนนับ และจำนวนที่ไม่เป็นจำนวนนับ
                <p>หากผลลัพธ์นั้นเป็นจำนวนนับ จะเรียกว่า หารลงตัว</p>
                <p>แต่หากผลลัพธ์ไม่เป็นจำนวนนับ จะเรียกว่า หารไม่ลงตัว</p>
                <p>การหาร เขียนให้อยู่ในรูปสัญลักษณ์ได้เป็น $$A \\div B$$</p>
                <h5>ตัวอย่างของการหารจำนวนนับ</h5>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $12 \\div 3$</p>
                    <p>สามารถแสดงวิธีหาผลลัพธ์ได้ดังรูป</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/div1.svg">
                    </div>
                    <p>ดังนั้น $12 \\div 3$ ได้ผลลัพธ์เท่ากับ $4$ หรือ $12 \\div 3=4$ และเป็นการหารลงตัว</p>
                </div>
                <div class="p-3">
                    <p>จงหาผลลัพธ์ของ $7 \\div 2$</p>
                    <p>สามารถแสดงวิธีหาผลลัพธ์ได้ดังรูป</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/div2.svg">
                    </div>
                    <p>ดังนั้น $7 \\div 2$ ได้ผลลัพธ์เท่ากับ $3$ เศษ $1$ ส่วน $2$ หรือ $7 \\div 2=3\\frac{1}{2}$ และเป็นการหารไม่ลงตัว</p>
                </div>
              `
    },
    {
        id: "natnum8",
        topic: "สมบัติบางประการของจำนวนนับ",
        data: `
                <p>กำหนดให้ $A,B,C$ เป็นจำนวนนับใด ๆ</p>
                <h5>สมบัติการสลับที่</h5>
                <div class="p-3">
                    <p>สมบัติการสลับที่การบวก</p>
                    <p>จำนวนนับสองจำนวนใด ๆ เมื่อกระทำการบวกกัน สามารถสลับที่กันได้ โดยผลลัพธ์จะไม่เปลี่ยนแปลง อธิบายในรูปสัญลักษณ์ได้เป็น $$A+B=B+A$$</p>
                </div>
                <div class="p-3">
                    <p>สมบัติการสลับที่การคูณ</p>
                    <p>จำนวนนับสองจำนวนใด ๆ เมื่อกระทำการคูณกัน สามารถสลับที่กันได้ โดยผลลัพธ์จะไม่เปลี่ยนแปลง อธิบายในรูปสัญลักษณ์ได้เป็น $$A \\times B=B \\times A$$</p>
                </div>
                <h5>สมบัติการเปลี่ยนหมู่</h5>
                <div class="p-3">
                    <p>สมบัติการเปลี่ยนหมู่การบวก</p>
                    <p>จำนวนนับสามจำนวนใด ๆ เมื่อกระทำการบวกกัน สามารถเปลี่ยนลำดับของคู่การบวกในการคำนวณได้ โดยผลลัพธ์จะไม่เปลี่ยนแปลง อธิบายในรูปสัญลักษณ์ได้เป็น $$(A+B)+C=A+(B+C)$$</p>
                </div>
                <div class="p-3">
                    <p>สมบัติการเปลี่ยนหมู่การคูณ</p>
                    <p>จำนวนนับสามจำนวนใด ๆ เมื่อกระทำการคูณกัน สามารถเปลี่ยนลำดับของคู่การคูณในการคำนวณได้ โดยผลลัพธ์จะไม่เปลี่ยนแปลง อธิบายในรูปสัญลักษณ์ได้เป็น $$(A\\times B)\\times C=A \\times (B \\times C)$$</p>
                </div>
                <h5>สมบัติการแจกแจง</h5>
                <div class="p-3">
                    <p>จำนวนนับหนึ่งจำนวนใด ๆ เมื่อกระทำการคูณกับจำนวนนับสองจำนวนที่กำลังกระทำการบวกกัน สามารถแจกแจงตัวคูณให้คูณกับแต่ละจำนวนดังกล่าวนั้นได้ แล้วจึงค่อยกระทำการบวก โดยผลลัพธ์จะไม่เปลี่ยนแปลง อธิบายในรูปสัญลักษณ์ได้เป็น $$A\\times (B+C)=(A\\times B)+(A\\times C)$$ หรือ $$(A+B)\\times C=(A\\times C)+(B\\times C)$$</p>
                </div>
              `
    },
    {
        id: "natnum9",
        topic: "ตัวประกอบ",
        data: `
                <p>ตัวประกอบ หรือตัวหารของจำนวนนับใด ๆ (สมมติให้จำนวนนับนั้นเป็น $A$) หมายถึง จำนวนนับบางจำนวน (สมมติเป็น $B$) ที่หาร $A$ ลงตัว</p>
                <p>กล่าวคือ $B$ จะเป็นตัวประกอบของ $A$ ก็ต่อเมื่อ $B$ หาร $A$ ลงตัว</p>
                <h5>ตัวอย่างของการหาตัวประกอบ</h5>
                <div class="p-3">
                    <p>จงหาว่า $8$ เป็นตัวประกอบของ $24$ หรือไม่</p>
                    <p>เพราะว่า $8$ หาร $24$ ลงตัว</p>
                    <p>ดังนั้น $8$ เป็นตัวประกอบหนึ่งของ $24$</p>
                </div>
                <div class="p-3">
                    <p>จงหาตัวประกอบทั้งหมดของ $24$</p>
                    <p>เพราะว่า $1,2,3,4,6,8,12,24$ หาร $24$ ลงตัวทั้งหมด</p>
                    <p>ดังนั้น $1,2,3,4,6,8,12,24$ เป็นตัวประกอบของ $24$</p>
                </div>
                <p><a href="/calculator-unit/natural-number/find-factor" target="_blank">โปรแกรมสำหรับหาตัวประกอบ</a></p>
              `
    },
    {
        id: "natnum10",
        topic: "จำนวนเฉพาะ",
        data: `
                <p>จำนวนเฉพาะ (สมมติเป็น $P$) หมายถึง จำนวนนับที่มีตัวประกอบเพียงสองจำนวน นั่นคือ $1$ และจำนวนนับนั้น</p>
                <p>กล่าวคือ $P$ จะเป็นจำนวนเฉพาะ ก็ต่อเมื่อ $P$ มีตัวประกอบทั้งหมดเป็น $1,P$</p>
                <h5>ตัวอย่างของการหาจำนวนเฉพาะ</h5>
                <div class="p-3">
                    <p>จงหาว่า $13$ เป็นจำนวนเฉพาะหรือไม่</p>
                    <p>เพราะว่า ตัวประกอบของ $13$ ได้แก่ $1,13$</p>
                    <p>ดังนั้น $13$ เป็นจำนวนเฉพาะ</p>
                </div>
                <div class="p-3">
                    <p>จงหาว่า $14$ เป็นจำนวนเฉพาะหรือไม่</p>
                    <p>เพราะว่า ตัวประกอบของ $14$ ได้แก่ $1,2,7,14$</p>
                    <p>ดังนั้น $14$ ไม่เป็นจำนวนเฉพาะ</p>
                </div>
                <p><a href="/calculator-unit/natural-number/prime-number-finder" target="_blank">โปรแกรมสำหรับหาจำนวนเฉพาะ</a></p>
              `
    },
    {
        id: "natnum11",
        topic: "จำนวนประกอบ",
        data: `
                <p>จำนวนประกอบ (สมมติเป็น $C$) หมายถึง จำนวนนับที่มีตัวประกอบมากกว่าสองจำนวน</p>
                <h5>ตัวอย่างของการหาจำนวนประกอบ</h5>
                <div class="p-3">
                    <p>จงหาว่า $18$ เป็นจำนวนประกอบหรือไม่</p>
                    <p>เพราะว่า ตัวประกอบของ $18$ ได้แก่ $1,2,3,6,9,18$</p>
                    <p>ดังนั้น $18$ เป็นจำนวนประกอบ</p>
                </div>
                <div class="p-3">
                    <p>จงหาว่า $1$ เป็นจำนวนประกอบหรือไม่</p>
                    <p>เพราะว่า ตัวประกอบของ $1$ ได้แก่ $1$</p>
                    <p>ดังนั้น $1$ ไม่เป็นจำนวนประกอบ (และยังไม่เป็นจำนวนเฉพาะด้วย)</p>
                </div>
              `
    },
    {
        id: "natnum12",
        topic: "ตัวประกอบเฉพาะ",
        data: `
                <p>ตัวประกอบเฉพาะ หมายถึง ตัวประกอบที่เป็นจำนวนเฉพาะ</p>
                <h5>ตัวอย่างของการหาตัวประกอบเฉพาะ</h5>
                <div class="p-3">
                    <p>จงหาตัวประกอบเฉพาะของ $36$</p>
                    <p>เพราะว่า ตัวประกอบของ $36$ ได้แก่ $1,2,3,4,6,8,9,12,18,36$</p>
                    <p>และมี $2,3$ เป็นจำนวนเฉพาะ</p>
                    <p>ดังนั้น ตัวประกอบเฉพาะของ $36$ ได้แก่ $2,3$</p>
                </div>
                <div class="p-3">
                    <p>จงหาตัวประกอบเฉพาะของ $5$</p>
                    <p>เพราะว่า ตัวประกอบของ $5$ ได้แก่ $1,5$</p>
                    <p>และมี $5$ เป็นจำนวนเฉพาะ</p>
                    <p>ดังนั้น ตัวประกอบเฉพาะของ $5$ ได้แก่ $5$</p>
                </div>
                <p><a href="/calculator-unit/natural-number/prime-factor-finder" target="_blank">โปรแกรมสำหรับหาตัวประกอบเฉพาะ</a></p>
              `
    },
    {
        id: "natnum13",
        topic: "การแยกตัวประกอบเฉพาะของจำนวนนับ",
        data: `
                <p>การแยกตัวประกอบเฉพาะของจำนวนนับใด ๆ หมายถึง การเขียนจำนวนนับนั้นให้อยู่ในรูปการคูณของจำนวนนับที่เป็นตัวประกอบเฉพาะของจำนวนนั้น ๆ</p>
                <p>โดยจำนวนนับหนึ่งจำนวน สามารถเขียนให้อยู่ในรูปแยกตัวประกอบเฉพาะได้เพียงรูปแบบเดียว</p>
                <p>สำหรับขั้นตอนในการแยกตัวประกอบเฉพาะ สามารถกระทำได้ดังนี้</p>
                <ol>
                    <li>กำหนดให้ตัวหาร $d$ เป็นจำนวนเฉพาะ และ $N$ เป็นจำนวนนับที่จะหาจำนวนเฉพาะ</li>
                    <li>เริ่มต้นให้ $d$ เป็นจำนวนเฉพาะที่น้อยที่สุดก่อน นั่นคือ $2$</li>
                    <li>หาร $N$ ด้วย $d$ หากหารลงตัว แสดงว่า $d$ เป็นตัวประกอบเฉพาะของ $N$ แล้วเก็บค่า $d$ นั้นไว้ที่นิพจน์คำตอบ</li>
                    <li>เปลี่ยนค่าของ $N$ ให้เป็นผลลัพธ์ที่ได้ แล้วทำซ้ำข้อ 3. จนกว่าจะหารไม่ลงตัว</li>
                    <li>หากผลลัพธ์ยังไม่เป็น $1$ ให้เปลี่ยนค่า $d$ เป็นจำนวนเฉพาะตัวถัดไป แล้วทำซ้ำข้อ 3.</li>
                    <li>หากผลลัพธ์เป็น $1$ แล้ว ให้นำตัวประกอบเฉพาะที่ได้ทั้งหมดมาคูณกัน รูปการคูณที่ได้คือผลลัพธ์จากการแยกตัวประกอบเฉพาะ</li>
                </ol>
                <p>หากทราบตัวประกอบเฉพาะทั้งหมดของจำนวนนั้นมาก่อน สามารถลดทอนขั้นตอนในการแยกตัวประกอบ โดยเลือกเฉพาะจำนวนเฉพาะที่เป็นตัวประกอบเฉพาะได้</p>
                <h5>ตัวอย่างของการแยกตัวประกอบเฉพาะ</h5>
                <div class="p-3">
                    <p>จงทำการแยกตัวประกอบเฉพาะของ $50$</p>
                    <p>กำหนดให้ $N=50$ และ $d=2$ ในตอนเริ่มต้น</p>
                    <p>หาร $N$ ด้วย $d$ จะได้ $50\\div 2=25$ (หารลงตัว เก็บ $2$ ไว้เป็นผลลัพธ์)</p>
                    <p>เปลี่ยนค่า $N$ เป็น $25$</p>
                    <p>หาร $N$ ด้วย $d$ จะได้ $25\\div 2=12$ เศษ $1$ ส่วน $2$ (หารไม่ลงตัว เปลี่ยนค่า $d$)</p>
                    <p>เปลี่ยนค่า $d$ เป็น $3$</p>
                    <p>หาร $N$ ด้วย $d$ จะได้ $25\\div 3=8$ เศษ $1$ ส่วน $3$ (หารไม่ลงตัว เปลี่ยนค่า $d$)</p>
                    <p>เปลี่ยนค่า $d$ เป็น $5$</p>
                    <p>หาร $N$ ด้วย $d$ จะได้ $25\\div 5=5$ (หารลงตัว เก็บ $5$ ไว้เป็นผลลัพธ์)</p>
                    <p>เปลี่ยนค่า $N$ เป็น $5$</p>
                    <p>หาร $N$ ด้วย $d$ จะได้ $5\\div 5=1$ (หารลงตัว เก็บ $5$ ไว้เป็นผลลัพธ์)</p>
                    <p>ผลลัพธ์เป็น $1$ แล้ว นำผลลัพธ์ทั้งหมด ได้แก่ $2,5,5$ มาคูณกัน จะได้ $50=2\\times 5\\times 5$</p>
                </div>
                <p class="text-danger">* $1$ เป็นจำนวนนับจำนวนเดียวที่ไม่มีรูปแยกตัวประกอบ</p>
                <p><a href="/calculator-unit/natural-number/prime-decomposition" target="_blank">โปรแกรมสำหรับแยกตัวประกอบเฉพาะ</a></p>
              `
    },
    {
        id: "natnum14",
        topic: "ตัวหารร่วม",
        data: `
                <p>ตัวหารร่วม หรือตัวประกอบร่วมของจำนวนนับตั้งแต่สองจำนวนขึ้นไป หมายถึง ตัวประกอบที่หารจำนวนเหล่านั้นลงตัวทุกจำนวน</p>
                <h5>ตัวอย่างของการหาตัวหารร่วม</h5>
                <div class="p-3">
                    <p>จงหาตัวหารร่วมของ $12,30$</p>
                    <p>ตัวประกอบของ $12$ ได้แก่ $1,2,3,4,6,12$</p>
                    <p>ตัวประกอบของ $30$ ได้แก่ $1,2,3,5,6,10,15,30$</p>
                    <p>พบว่า ตัวประกอบที่เหมือนกันของทั้งสองจำนวน ได้แก่ $1,2,3,6$
                    <p>ดังนั้น ตัวหารร่วมของ $12,30$ คือ $1,2,3,6$</p>
                </div>
                <div class="p-3">
                    <p>จงหาตัวหารร่วมของ $10,15,21$</p>
                    <p>ตัวประกอบของ $10$ ได้แก่ $1,2,5,10$</p>
                    <p>ตัวประกอบของ $15$ ได้แก่ $1,3,5,15$</p>
                    <p>ตัวประกอบของ $21$ ได้แก่ $1,3,7,21$</p>
                    <p>พบว่า ตัวประกอบที่เหมือนกันของทั้งสามจำนวน ได้แก่ $1$
                    <p>ดังนั้น ตัวหารร่วมของ $10,15,21$ คือ $1$</p>
                </div>
              `
    },
    {
        id: "natnum15",
        topic: "ตัวหารร่วมมาก",
        data: `
                <p>ตัวหารร่วมมาก หรือ ห.ร.ม. ของจำนวนนับตั้งแต่สองจำนวนขึ้นไป หมายถึง ตัวหารร่วมของจำนวนเหล่านั้นที่มีค่ามากที่สุด</p>
                <h6>ขั้นตอนในการหา ห.ร.ม. โดยการพิจารณาตัวหารร่วม</h6>
                <ol>
                    <li>หาตัวประกอบของแต่ละจำนวน</li>
                    <li>หาตัวหารร่วม</li>
                    <li>หาตัวหารร่วมที่มากที่สุด ซึ่งเป็นผลลัพธ์</li>
                </ol>
                <h6>ขั้นตอนในการหา ห.ร.ม. โดยการหารสั้น</h6>
                <ol>
                    <li>หารจำนวนทั้งหมดพร้อมกันด้วยจำนวนเฉพาะที่สามารถหารได้ลงตัวทั้งหมด</li>
                    <li>หากยังมีจำนวนเฉพาะที่สามารถหารต่อได้ ให้ทำข้อ 1. อีก</li>
                    <li>หากไม่สามารถหารต่อได้แล้ว นำตัวหารทั้งหมดมาคูณกัน ซึ่งเป็นผลลัพธ์ (ห.ร.ม.)</li>
                </ol>
                <h5>ตัวอย่างของการหา ห.ร.ม.</h5>
                <div class="p-3">
                    <p>จงหา ห.ร.ม. ของ $28,70$</p>
                    <p>ตัวประกอบของ $28$ ได้แก่ $1,2,4,7,14,28$</p>
                    <p>ตัวประกอบของ $70$ ได้แก่ $1,2,5,7,10,14,35,70$</p>
                    <p>ได้ตัวหารร่วมเป็น $1,2,7,14$ และ $14$ เป็นตัวหารร่วมที่มากที่สุด</p>
                    <p>ดังนั้น ห.ร.ม. ของ $28,70$ คือ $14$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/gcd1.svg">
                    </div>
                </div>
                <div class="p-3">
                    <p>จงหา ห.ร.ม. ของ $15,27,30$</p>
                    <p>ตัวประกอบของ $15$ ได้แก่ $1,3,5,15$</p>
                    <p>ตัวประกอบของ $27$ ได้แก่ $1,3,9,27$</p>
                    <p>ตัวประกอบของ $30$ ได้แก่ $1,2,3,5,6,10,15,30$</p>
                    <p>ได้ตัวหารร่วมเป็น $1,3$ และ $3$ เป็นตัวหารร่วมที่มากที่สุด</p>
                    <p>ดังนั้น ห.ร.ม. ของ $15,27,30$ คือ $3$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/gcd2.svg">
                    </div>
                </div>
                <p><a href="/calculator-unit/natural-number/gcd-and-common-factor-finder" target="_blank">โปรแกรมสำหรับหาตัวหารร่วมมาก</a></p>
              `
    },
    {
        id: "natnum16",
        topic: "พหุคูณ",
        data: `
                <p>พหุคูณ หรือตัวคูณของจำนวนนับใด ๆ (สมมติเป็น $B$) หมายถึง จำนวนนับบางจำนวน (สมมติเป็น $A$) ที่หารด้วย $B$ ลงตัว</p>
                <p>กล่าวคือ $A$ จะเป็นพหุคูณของ $B$ ก็ต่อเมื่อ $A$ หารด้วย $B$ ลงตัว</p>
                <h5>ตัวอย่างของการหาพหคูณ</h5>
                <div class="p-3">
                    <p>จงหาว่า $24$ เป็นพหุคูณของ $8$ หรือไม่</p>
                    <p>เพราะว่า $24$ หารด้วย $8$ ลงตัว</p>
                    <p>ดังนั้น $24$ เป็นพหุคูณหนึ่งของ $8$</p>
                </div>
                <div class="p-3">
                    <p>จงหาพหุคูณทั้งหมดของ $8$</p>
                    <p>เพราะว่า $8,16,24,32,40,48,...$ หารด้วย $8$ ลงตัวทั้งหมด</p>
                    <p>ดังนั้น $8,16,24,32,40,48,...$ เป็นพหุคูณของ $8$</p>
                </div>
                <p><a href="/calculator-unit/natural-number/multiple-finder" target="_blank">โปรแกรมสำหรับหาพหุคูณ</a></p>
              `
    },
    {
        id: "natnum17",
        topic: "ตัวคูณร่วม",
        data: `
                <p>ตัวคูณร่วม หรือพหุคูณร่วมของจำนวนนับตั้งแต่สองจำนวนขึ้นไป หมายถึง พหุคูณที่หารด้วยจำนวนเหล่านั้นลงตัวทุกจำนวน</p>
                <h5>ตัวอย่างของการหาตัวคูณร่วม</h5>
                <div class="p-3">
                    <p>จงหาตัวคูณร่วมของ $3,4$</p>
                    <p>พหุคูณของ $3$ ได้แก่ $3,6,9,12,15,18,21,...$</p>
                    <p>พหุคูณของ $4$ ได้แก่ $4,8,12,16,20,24,28,...$</p>
                    <p>พบว่า พหุคูณที่เหมือนกันของทั้งสองจำนวน ได้แก่ $12,24,36,48,...$
                    <p>ดังนั้น ตัวหารร่วมของ $3,4$ คือ $12,24,36,48,...$</p>
                </div>
                <div class="p-3">
                    <p>จงหาตัวคูณร่วมของ $2,4,8$</p>
                    <p>พหุคูณของ $2$ ได้แก่ $2,4,6,8,10,12,14,...$</p>
                    <p>พหุคูณของ $4$ ได้แก่ $4,8,12,16,20,24,28,...$</p>
                    <p>พหุคูณของ $8$ ได้แก่ $8,16,24,32,40,48,56,...$</p>
                    <p>พบว่า พหุคูณที่เหมือนกันของทั้งสามจำนวน ได้แก่ $8,16,24,32,40,48,56,...$
                    <p>ดังนั้น ตัวหารร่วมของ $2,4,8$ คือ $8,16,24,32,40,48,56,...$</p>
                </div>
              `
    },
    {
        id: "natnum18",
        topic: "ตัวคูณร่วมน้อย",
        data: `
                <p>ตัวคูณร่วมน้อย หรือ ค.ร.น. ของจำนวนนับตั้งแต่สองจำนวนขึ้นไป หมายถึง ตัวคูณร่วมของจำนวนเหล่านั้นที่มีค่าน้อยที่สุด</p>
                <h6>ขั้นตอนในการหา ค.ร.น. โดยการพิจารณาตัวคูณร่วม</h6>
                <ol>
                    <li>หาพหุคูณของแต่ละจำนวน</li>
                    <li>หาตัวคูณร่วม</li>
                    <li>หาตัวคูณร่วมที่น้อยที่สุด ซึ่งเป็นผลลัพธ์</li>
                </ol>
                <h6>ขั้นตอนในการหา ค.ร.น. โดยการหารสั้น</h6>
                <ol>
                    <li>หารจำนวนทั้งหมดพร้อมกันด้วยจำนวนเฉพาะที่สามารถหารได้ลงตัวทั้งหมด</li>
                    <li>หากยังมีจำนวนเฉพาะที่สามารถหารต่อได้ ให้ทำข้อ 1. อีก</li>
                    <li>หากไม่สามารถหารจำนวนทั้งหมดได้ แต่ยังสามารถหารจำนวนนับตั้งแต่สองจำนวนขึ้นไปได้ ให้ทำการหารอีก</li>
                    <li>หากไม่สามารถหารต่อได้แล้ว นำตัวหารทั้งหมด และเศษเหลือทั้งหมดมาคูณกัน ซึ่งเป็นผลลัพธ์ (ค.ร.น.)</li>
                </ol>
                <h5>ตัวอย่างของการหา ค.ร.น.</h5>
                <div class="p-3">
                    <p>จงหา ค.ร.น. ของ $8,14$</p>
                    <p>พหุคูณของ $8$ ได้แก่ $8,16,24,32,40,48,56,64,...$</p>
                    <p>พหุคูณของ $14$ ได้แก่ $14,28,42,56,70,84,98,112...$</p>
                    <p>ได้ตัวคูณร่วมเป็น $56,112,168,...$ และ $56$ เป็นตัวคูณร่วมที่น้อยที่สุด</p>
                    <p>ดังนั้น ค.ร.น. ของ $8,14$ คือ $56$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/lcm1.svg">
                    </div>
                </div>
                <div class="p-3">
                    <p>จงหา ค.ร.น. ของ $15,24,48$</p>
                    <p>พหุคูณของ $15$ ได้แก่ $15,30,45,60,75,90,...,240,255,...$</p>
                    <p>พหุคูณของ $24$ ได้แก่ $24,48,72,96,120,144,...,240,268,...$</p>
                    <p>พหุคูณของ $48$ ได้แก่ $48,96,144,192,240,288,...$</p>
                    <p>ได้ตัวคูณร่วมเป็น $240,480,720,...$ และ $240$ เป็นตัวคูณร่วมที่น้อยที่สุด</p>
                    <p>ดังนั้น ค.ร.น. ของ $15,24,48$ คือ $240$</p>
                    <div class="container-fluid text-center my-5">
                        <img class="img-fluid" src="assets/images/math/natural_number/lcm2.svg">
                    </div>
                </div>
                <p><a href="/calculator-unit/natural-number/lcm-and-common-multiple-finder" target="_blank">โปรแกรมสำหรับหาตัวคูณร่วมน้อย</a></p>
              `
    },
    {
        id: "natnum19",
        topic: "ขั้นตอนวิธีของยูคลิด",
        data: `
                <p>จากขั้นตอนการหา ห.ร.ม. ที่ได้กล่าวไปก่อนหน้านั้น เมื่อจำนวนนับที่ใช้หา ห.ร.ม. มีค่ามาก ๆ การใช้วิธีเดิมนั้นอาจทำให้เสียเวลาในการหามากเกินไป</p>
                <p>ขั้นตอนวิธีของยูคลิด สามารถช่วยให้หา ห.ร.ม. สำหรับสองจำนวนได้ง่ายขึ้น โดยมีขั้นตอนดังนี้</p>
                <p>กำหนดให้ $A,B$ เป็นจำนวนนับ โดยที่ $A>B$</p>
                <ol>
                    <li>นำ $A$ หารด้วย $B$ เพื่อหาเศษเหลือ</li>
                    <li>หากหารลงตัว (เศษเหลือมีค่าเป็น $0$) จะได้ว่า $B$ เป็น ห.ร.ม.</li>
                    <li>หากหารไม่ลงตัว (เศษเหลือมีค่าไม่เป็น $0$) เปลี่ยนค่า $A$ ให้เป็น $B$ และเปลี่ยนค่า $B$ ให้เป็นเศษเหลือนั้น</li>
                    <li>ทำซ้ำข้อ 1. จนกว่าเศษจะเป็น $0$</li>
                </ol>
                <h5>ตัวอย่างของการหา ห.ร.ม. โดยขั้นตอนวิธีของยูคลิด</h5>
                <div class="p-3">
                    <p>จงหา ห.ร.ม. ของ $341,527$</p>
                    <div class="container-fluid text-center my-3">
                        <img class="img-fluid" src="assets/images/math/natural_number/ecl_1.svg">
                    </div>
                    <p>ขั้นตอนที่ 1 : หาร $527$ ด้วย $341$ ได้ $1$ เศษ $186$</p>
                    <div class="container-fluid text-center my-3">
                        <img class="img-fluid" src="assets/images/math/natural_number/ecl_2.svg">
                    </div>
                    <p>ขั้นตอนที่ 2 : หาร $341$ ด้วย $186$ ได้ $1$ เศษ $155$</p>
                    <div class="container-fluid text-center my-3">
                        <img class="img-fluid" src="assets/images/math/natural_number/ecl_3.svg">
                    </div>
                    <p>ขั้นตอนที่ 3 : หาร $186$ ด้วย $155$ ได้ $1$ เศษ $31$</p>
                    <div class="container-fluid text-center my-3">
                        <img class="img-fluid" src="assets/images/math/natural_number/ecl_4.svg">
                    </div>
                    <p>ขั้นตอนที่ 4 : หาร $155$ ด้วย $31$ ได้ $5$ เศษ $0$</p>
                    <div class="container-fluid text-center my-3">
                        <img class="img-fluid" src="assets/images/math/natural_number/ecl_5.svg">
                    </div>
                    <p>ดังนั้น ห.ร.ม. ของ $341,527$ คือ $31$</p>
                </div>
                <p>สำหรับการหา ห.ร.ม. ของจำนวนนับตั้งแต่สามจำนวนขึ้นไปโดยขั้นตอนวิธีของยูคลิด สามารถกระทำกับสองจำนวนก่อน แล้วนำ ห.ร.ม. ที่ได้มาหา ห.ร.ม. กับจำนวนอื่นจนครบ</p>
              `
    },
    {
        id: "natnum20",
        topic: "ความสัมพันธ์ระหว่างจำนวนนับสองจำนวน ห.ร.ม. และ ค.ร.น.",
        data: `
                <p>กำหนดให้ $A,B$ แทนจำนวนนับสองจำนวน</p>
                <p>$gcd(A,B)$ แทน ห.ร.ม. ของ $A,B$</p>
                <p>$lcm(A,B)$ แทน ค.ร.น. ของ $A,B$</p>
                <p>ผลคูณของ $A,B$ มีค่าเท่ากันกับผลคูณของ ห.ร.ม. กับ ค.ร.น. ของ $A,B$</p>
                <p>กล่าวคือ $$A\\times B=gcd(A,B)\\times lcm(A,B)$$</p>
              `
    },
    {
        id: "natnum21",
        topic: "การประยุกต์ของ ห.ร.ม. และ ค.ร.น.",
        data: `
                <div class="p-3">
                    <p>จงหาจำนวนนับที่มากที่สุดที่หาร $129$ เหลือเศษ $1$ หาร $200$ เหลือเศษ $2$ และหาร $243$ เหลือเศษ $3$</p>
                    <p>จำนวนนับที่หาร $129$ เหลือเศษ $1$ จะหาร $129-1=128$ ได้ลงตัว</p>
                    <p>จำนวนนับที่หาร $200$ เหลือเศษ $2$ จะหาร $200-2=198$ ได้ลงตัว</p>
                    <p>จำนวนนับที่หาร $243$ เหลือเศษ $3$ จะหาร $243-3=240$ ได้ลงตัว</p>
                    <p>โดยสามารถอธิบายใหม่ได้ว่า หาจำนวนนับที่มากที่สุดที่หาร $128,198,240$ ลงตัว</p>
                    <p>นั่นคือ การหา ห.ร.ม. ของ $128,198,240$ ซึ่งได้เป็น $2$</p>
                    <p>ดังนั้น $2$ เป็นจำนวนนับที่มากที่สุดที่หาร $129$ เหลือเศษ $1$ หาร $200$ เหลือเศษ $2$ และหาร $243$ เหลือเศษ $3$</p>
                </div>
                <div class="p-3">
                    <p>จงหาจำนวนนับที่มากที่สุดที่หาร $271,322,445$ แล้วเหลือเศษเท่ากัน และเศษนั้นมีค่าเท่าใด</p>
                    <p>จากโจทย์ จะไม่สามารถหา ห.ร.ม. ออกมาได้ตรง ๆ เพราะไม่ทราบว่าเศษเป็นเท่ากัน แต่สามารถนำจำนวนเหล่านั้นมาหาผลต่าง แล้วนำผลต่างนั้นมาหา ห.ร.ม. ได้</p>
                    <p>หาผลต่างแต่ละคู่ ได้ดังนี้</p>
                    <p>$322-271=51$</p>
                    <p>$445-271=174$</p>
                    <p>$445-322=123$</p>
                    <p>และหา ห.ร.ม. ของ $51,174,123$ ซึ่งได้เป็น $3$</p>
                    <p>นำ $3$ ไปหารจำนวนจากโจทย์ จะได้</p>
                    <p>$271\\div 3=90$ เศษ $1$</p>
                    <p>$322\\div 3=107$ เศษ $1$</p>
                    <p>$445\\div 3=148$ เศษ $1$</p>
                    <p>ดังนั้น $3$ เป็นจำนวนนับที่มากที่สุดที่หาร $271,322,445$ แล้วเหลือเศษ $1$ เท่ากัน</p>
                </div>
                <div class="p-3">
                    <p>มีลูกอมสีแดงอยู่ $108$ เม็ด สีฟ้า $180$ เม็ด สีเหลือง $90$ เม็ด และสีเขียว $144$ เม็ด ต้องการจะแบ่งลูกอมใส่ถุง ถุงละเท่า ๆ กัน ให้ได้จำนวนมากที่สุด จะแบ่งได้ถุงละกี่เม็ด และแต่ละสีจะได้กี่ถุง</p>
                    <p>โจทย์ต้องการถามหาจำนวนที่มากที่สุดที่สามารถหาร $108,180,90,144$ ได้ลงตัว</p>
                    <p>นั่นคือ หา ห.ร.ม. ของ $108,180,90,144$ ซึ่งได้เป็น $18$</p>
                    <p>นอกจากนี้ โจทย์ยังถามหาจำนวนถุงลูกอมแต่ละสี จะได้ว่า</p>
                    <p>จำนวนถุงลูกอมสีแดงเป็น $108\\div 18=6$ ถุง</p>
                    <p>จำนวนถุงลูกอมสีฟ้าเป็น $180\\div 18=10$ ถุง</p>
                    <p>จำนวนถุงลูกอมสีเหลืองเป็น $90\\div 18=5$ ถุง</p>
                    <p>จำนวนถุงลูกอมสีเขียวเป็น $144\\div 18=8$ ถุง</p>
                    <p>ดังนั้น จะแบ่งลูกอมแต่ละสีใส่ถุงได้มากที่สุด ถุงละ $18$ เม็ด โดยมีสีแดง $6$ ถุง สีฟ้า $10$ ถุง สีเหลือง $5$ ถุง และสีเขียว $8$ ถุง</p>
                </div>
                <div class="p-3">
                    <p>จงหาจำนวนนับที่น้อยที่สุดที่หารด้วย $12$ และ $15$ เหลือเศษ $2$ เท่ากัน</p>
                    <p>เริ่มต้น จะทำการหาจำนวนนับที่น้อยที่สุดที่หารด้วย $12$ และ $15$ ลงตัว</p>
                    <p>นั่นคือ หา ค.ร.น. ของ $12,15$ ซึ่งได้เป็น $60$</p>
                    <p>จากโจทย์ ต้องการให้หารแล้วเหลือเศษเป็น $2$</p>
                    <p>จะได้ $60+2=62$</p>
                    <p>ดังนั้น $62$ เป็นจำนวนนับที่น้อยที่สุดที่หารด้วย $12$ และ $15$ เหลือเศษ $2$ เท่ากัน</p>
                </div>
                <div class="p-3">
                    <p>หอนาฬิกาแห่งหนึ่ง มีระฆังสามขนาด ระฆังเล็กจะดังทุก ๆ $4$ ชั่วโมง ระฆังกลางจะดังทุก ๆ $6$ ชั่วโมง ระฆังใหญ่จะดังทุก ๆ $8$ ชั่วโมง ถ้าระฆังทั้งสามเริ่มดังพร้อมกันที่เวลาเที่ยงคืนตรง แล้วจะใช้เวลานานเท่าใด ระฆังทั้งสามจะดังพร้อมกันอีกครั้ง</p>
                    <p>โจทย์ต้องการถามหาจำนวนชั่วโมงที่น้อยที่สุดที่ระฆังจะดังพร้อมกันอีก</p>
                    <p>นั่นคือ หา ค.ร.น. ของ $4,6,8$ ซึ่งได้เป็น $24$</p>
                    <p>ดังนั้น ระฆังจะดังพร้อมกันอีกเมื่อผ่านไป $24$ ชั่วโมง หรือเที่ยงคืนของวันถัดไป</p>
                </div>
              `
    }
  ];