import { useEffect } from "react";
import CardImage from "../../components/Card/CardImage"
import AppLayouts from "../../Layouts/AppLayouts"

import pj1 from '../../assets/images/ProjectsImage/pj_1.png';
import pj2 from '../../assets/images/projects_2/N-Connect.jpg';
import pj3 from '../../assets/images/projects_3/To do list.jpg';
import pj4 from '../../assets/images/projects_4/2AM Labs.jpg';
import Breadcrumbs from "../../components/Breadcrumbs";

const Projects = () => {
    useEffect(() => {
        document.title = "Project : ผลงาน";
    }, []);

    const card = [
        {
            project_id: 1,
            labelTitle: "LatLon to Address",
            labelDetail: "พัฒนาแอปพลิเคชันสำหรับส่งค่าพิกัดภูมิศาสตร์ (Latitude, Longitude) ไปยัง Longdo Map API เพื่อดึงข้อมูลที่อยู่ระดับ ตำบล อำเภอ จังหวัด และรหัสไปรษณีย์ กลับมา แล้วนำข้อมูลดังกล่าวบันทึกลงในฐานข้อมูล (Database)",
            image: pj1,
            to: `/projects_detail/1`,
            tags: ["Express", "MySQL", "API"],
        },
        {
            project_id: 2,
            labelTitle: "N-Connect",
            labelDetail: "แอปพลิเคชันนี้ทำหน้าที่เป็น ตัวกลาง (middleware) ระหว่างระบบของคุณกับ ศูนย์ LAB ภายนอก โดยใช้ API สำหรับส่งรายการตรวจ และรอรับผลการตรวจกลับมา จากนั้นส่งผลลัพธ์ให้ ลูกค้าหรือระบบ downstream ผ่าน Google Pub/Sub",
            image: pj2,
            to: `/projects_detail/2`,
            tags: ["Express", "MySQL", "API"],
        },
        {
            project_id: 3,
            labelTitle: "To-do List Web Application",
            labelDetail: "พัฒนาเว็บแอปพลิเคชันสำหรับบันทึก ข้อมูลการทำงานในแต่ละเคส (case) โดยผู้ใช้งานสามารถกรอกงานที่ทำในแต่ละวัน แล้วระบบจะทำการสรุปผล รายงาน (Report) ประจำเดือนโดยอัตโนมัติ",
            image: pj3,
            to: `/projects_detail/3`,
            tags: ["Express", "React", "PostgreSQL"],
        },
        {
            project_id: 4,
            labelTitle: "Midnight Report Web Application",
            labelDetail: "โปรดักต์ที่ตอบโจทย์ภาคธุรกิจ โดยเน้นการ ติดตามกระบวนการทำงาน (Process), การจัดทำ รายงาน (Report) และการ แสดงผลข้อมูลเชิงวิเคราะห์ผ่าน Dashboard อย่างมีประสิทธิภาพ เพื่อให้ผู้ใช้งานในองค์กรสามารถมองเห็นภาพรวมการดำเนินงาน ตัดสินใจได้อย่างแม่นยำ",
            image: pj4,
            to: `/projects_detail/4`,
            tags: ["Express", "MySQL"],
        },
    ]
    return (
        <AppLayouts>
            <div className="px-6">
                <h1 className="text-2xl font-bold underline mb-3 ">Project : ผลงาน</h1>
                <Breadcrumbs />
                <div className="flex flex-col gap-3 mt-3">
                    {card.map((item, index) => (
                        <CardImage
                            key={index}
                            labelTitle={item.labelTitle}
                            labelDetail={item.labelDetail}
                            image={item.image}
                            to={item.to}
                            tags={item.tags}
                        />
                    ))}
                </div>
            </div>
        </AppLayouts>
    )
}
export default Projects
