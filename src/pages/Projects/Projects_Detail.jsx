import { useParams } from "react-router-dom"
import AppLayouts from "../../Layouts/AppLayouts"
import { useEffect } from "react";


// 1
import pj1_1 from '../../assets/images/projects_1/Database Sync & Validation Flow.jpg';
import pj1_2 from '../../assets/images/projects_1/pj_1.png';
// 2
import pj2_1 from '../../assets/images/projects_2/N-Connect.jpg';
import pj2_2 from '../../assets/images/projects_2/result_1.png';
// 3

import pj3_1 from '../../assets/images/projects_3/To do list.jpg';
import pj3_2 from '../../assets/images/projects_3/2025-05-22 22_40_32-TodoList - Figma.png';
import pj3_3 from '../../assets/images/projects_3/2025-05-22 22_41_03-TodoList - Figma.png';
import pj3_4 from '../../assets/images/projects_3/result_1.png';
import pj3_5 from '../../assets/images/projects_3/result_2.png';
// 4
import pj4_1 from '../../assets/images/projects_4/2AM Labs.jpg';
import pj4_2 from '../../assets/images/projects_4/result_1.png';
import Breadcrumbs from "../../components/Breadcrumbs";

const Projects_Detail = () => {
    const { id } = useParams()

    useEffect(() => {
        document.title = "Project : ผลงาน";
    }, []);

    const pj_detail = [
        {
            pj_detail_id: 1,
            pj_detail_title: "LatLon to Address",
            // pj_detail: "ระบบจะทำการดึงข้อมูลจากฐานข้อมูลของฝั่ง Host แล้วคัดลอกข้อมูลเหล่านั้นลงมายังฐานข้อมูลของฝั่ง Client โดยอัตโนมัติ หลังจากดึงข้อมูลเรียบร้อยแล้ว ระบบจะเปรียบเทียบข้อมูลของทั้งสองฝั่ง คือ Host และ Client เพื่อตรวจสอบว่าการคัดลอกข้อมูลดำเนินการอย่างครบถ้วนและตรงกันหรือไม่ หากพบว่าข้อมูลตรงกันทุกประการ จะถือว่าการคัดลอกเสร็จสมบูรณ์ ในแต่ละแถวของข้อมูลจะมีพิกัดภูมิศาสตร์ (latitude และ longitude) ระบบจะนำค่าพิกัดเหล่านี้ไปเรียกใช้งาน API ภายนอก เพื่อดึงข้อมูลที่อยู่ (address) มาใช้งาน โดยจะเรียก API ซ้ำจำนวน 3 ครั้งต่อแถว เพื่อยืนยันความน่าเชื่อถือของข้อมูล หากผลลัพธ์ของที่อยู่จากทั้ง 3 ครั้งตรงกันทุกประการ ระบบจะถือว่าข้อมูลที่อยู่นั้นถูกต้องและน่าเชื่อถือ จากนั้นจึงทำการบันทึกข้อมูลที่อยู่ลงในฐานข้อมูลของฝั่ง Clientขั้นตอนดังกล่าวจะดำเนินการทีละแถว และจะทำซ้ำไปเรื่อย ๆ จนครบทุกแถวของข้อมูลที่ถูกซิงค์เข้ามา",
            image: [
                pj1_2,
                pj1_1,
            ]
        },
        {
            pj_detail_id: 2,
            pj_detail_title: "N-Connect",
            pj_detail: "",
            image: [
                pj2_2, pj2_1
            ]
        },
        {
            pj_detail_id: 3,
            pj_detail_title: "To-do List Web Application",
            pj_detail: "",
            image: [
                pj3_4, pj3_5, pj3_1, pj3_2, pj3_3
            ]
        },
        {
            pj_detail_id: 4,
            pj_detail_title: "Midnight Report Web Application",
            pj_detail: "",
            image: [
                pj4_2, pj4_1
            ]
        },

    ]

    const project = pj_detail.find(pj => pj.pj_detail_id === Number(id))

    if (!project) {
        return (
            <AppLayouts>
                <h1 className="text-2xl font-bold text-red-500">Project Not Found</h1>
            </AppLayouts>
        )
    }

    return (
        <AppLayouts>
            <div className="px-6">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">โปรเจค : {project.pj_detail_title}</h1>
                    <Breadcrumbs />
                    <h1 className="text-xl ">{project.pj_detail}</h1>
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                    {project.image.map((img, index) => (
                        <figure key={index} className="rounded-xl overflow-hidden mt-4  shadow-2xl">
                            <img
                                src={img}
                                alt={`Project Image ${index + 1}`}
                                className="object-cover w-full h-auto"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </AppLayouts>
    )
}

export default Projects_Detail
