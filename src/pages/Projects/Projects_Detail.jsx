import { useParams } from "react-router-dom"
import AppLayouts from "../../Layouts/AppLayouts"
import { useEffect } from "react";

const Projects_Detail = () => {
    const { id } = useParams()

    useEffect(() => {
        document.title = "Project : ผลงาน";
    }, []);

    const pj_detail = [
        {
            pj_detail_id: 1,
            pj_detail_title: "LatLon to Address",
            pj_detail: "ระบบจะทำการดึงข้อมูลจากฐานข้อมูลของฝั่ง Host แล้วคัดลอกข้อมูลเหล่านั้นลงมายังฐานข้อมูลของฝั่ง Client โดยอัตโนมัติ หลังจากดึงข้อมูลเรียบร้อยแล้ว ระบบจะเปรียบเทียบข้อมูลของทั้งสองฝั่ง คือ Host และ Client เพื่อตรวจสอบว่าการคัดลอกข้อมูลดำเนินการอย่างครบถ้วนและตรงกันหรือไม่ หากพบว่าข้อมูลตรงกันทุกประการ จะถือว่าการคัดลอกเสร็จสมบูรณ์ ในแต่ละแถวของข้อมูลจะมีพิกัดภูมิศาสตร์ (latitude และ longitude) ระบบจะนำค่าพิกัดเหล่านี้ไปเรียกใช้งาน API ภายนอก เพื่อดึงข้อมูลที่อยู่ (address) มาใช้งาน โดยจะเรียก API ซ้ำจำนวน 3 ครั้งต่อแถว เพื่อยืนยันความน่าเชื่อถือของข้อมูล หากผลลัพธ์ของที่อยู่จากทั้ง 3 ครั้งตรงกันทุกประการ ระบบจะถือว่าข้อมูลที่อยู่นั้นถูกต้องและน่าเชื่อถือ จากนั้นจึงทำการบันทึกข้อมูลที่อยู่ลงในฐานข้อมูลของฝั่ง Clientขั้นตอนดังกล่าวจะดำเนินการทีละแถว และจะทำซ้ำไปเรื่อย ๆ จนครบทุกแถวของข้อมูลที่ถูกซิงค์เข้ามา",
            image: [
                "/src/assets/images/projects_1/Database Sync & Validation Flow.jpg",
                "/src/assets/images/projects_1/pj_1.png"
            ]
        },
        {
            pj_detail_id: 2,
            pj_detail_title: "N-Connect",
            pj_detail: "",
            image: [
                "/src/assets/images/projects_2/N-Connect.jpg",
            ]
        },
        {
            pj_detail_id: 3,
            pj_detail_title: "To-do List Web Application",
            pj_detail: "",
            image: [
                "/src/assets/images/projects_3/To do list.jpg",
                "/src/assets/images/projects_3/2025-05-22 22_40_32-TodoList - Figma.png",
                "/src/assets/images/projects_3/2025-05-22 22_41_03-TodoList - Figma.png"
            ]
        },
        {
            pj_detail_id: 4,
            pj_detail_title: "Midnight Report Web Application",
            pj_detail: "",
            image: [
                "/src/assets/images/projects_4/2AM Labs.jpg"
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
                    <h1 className="text-2xl font-bold">ชื่อโปรเจค : {project.pj_detail_title}</h1>
                    <h1 className="text-xl ">Flow : {project.pj_detail}</h1>
                </div>
                <div className="flex gap-4 flex-wrap">
                    {project.image.map((img, index) => (
                        <figure key={index} className="rounded-xl overflow-hidden mt-4">
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
