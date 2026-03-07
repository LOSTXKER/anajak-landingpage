import { PageGroupConfig, ImageSlotConfig } from '@/types/admin';

export const imageSlotConfig: PageGroupConfig[] = [
  // ============================================================
  // หน้าแรก (Homepage)
  // ============================================================
  {
    id: 'homepage',
    label: 'หน้าแรก',
    icon: 'Home',
    sections: [
      {
        id: 'hero',
        label: 'Hero Section',
        description: 'ภาพหลักด้านบนสุดของหน้าแรก',
        slots: [
          { slot: 'hero-main', label: 'ภาพหลัก Hero', recommendedSize: '1920x1080', aspectRatio: '16:9', description: 'ภาพโรงงาน/เครื่องสกรีนกำลังทำงาน', photographyBrief: 'ถ่ายมุมกว้างในโรงงาน โชว์เครื่องสกรีนกำลังทำงาน มีพนักงานดูแลเครื่อง เห็นลายที่กำลังพิมพ์ชัด มีพื้นที่ว่างด้านซ้ายบนสำหรับวาง headline' },
        ],
      },
      {
        id: 'clients',
        label: 'Client Logos',
        description: 'โลโก้ลูกค้าที่เคยใช้บริการ (แถบเลื่อน)',
        slots: [
          { slot: 'logo-1', label: 'โลโก้ลูกค้า 1', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-2', label: 'โลโก้ลูกค้า 2', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-3', label: 'โลโก้ลูกค้า 3', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-4', label: 'โลโก้ลูกค้า 4', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-5', label: 'โลโก้ลูกค้า 5', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-6', label: 'โลโก้ลูกค้า 6', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-7', label: 'โลโก้ลูกค้า 7', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
          { slot: 'logo-8', label: 'โลโก้ลูกค้า 8', recommendedSize: '200x100', description: 'PNG พื้นหลังโปร่งใส', photographyBrief: 'ไฟล์โลโก้ดิจิทัล PNG พื้นหลังโปร่งใส ขอจากลูกค้าบริษัท/องค์กรที่คนรู้จัก' },
        ],
      },
      {
        id: 'usecases',
        label: 'Use Cases',
        description: 'ตัวอย่างการใช้งาน 6 หมวด (หมวดละ 3 รูป)',
        slots: [
          { slot: 'corporate-1', label: 'องค์กร/บริษัท - ภาพหลัก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'พนักงานบริษัท 3-5 คน สวมเสื้อโปโลยูนิฟอร์มที่มีโลโก้ ยืนหน้าออฟฟิศ ยิ้มมั่นใจ' },
          { slot: 'corporate-2', label: 'องค์กร/บริษัท - ภาพ 2', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'Close-up เสื้อโปโลยูนิฟอร์ม เห็นโลโก้ปักหน้าอก/สกรีนหลัง ชัดเจน' },
          { slot: 'corporate-3', label: 'องค์กร/บริษัท - ภาพ 3', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'ทีมงานกำลังประชุม ทุกคนสวมยูนิฟอร์มเดียวกัน ดูเป็นมืออาชีพ' },
          { slot: 'school-1', label: 'โรงเรียน/มหาวิทยาลัย - ภาพหลัก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'นักศึกษา/นักเรียน 4-6 คน ใส่เสื้อรุ่น/กีฬาสี สีสดใส ยืนหน้ามหาวิทยาลัยหรือสนามกีฬา' },
          { slot: 'school-2', label: 'โรงเรียน/มหาวิทยาลัย - ภาพ 2', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'Close-up เสื้อกิจกรรม เห็นลายสกรีนชื่อสถาบัน/ชื่อรุ่น ชัดเจน' },
          { slot: 'school-3', label: 'โรงเรียน/มหาวิทยาลัย - ภาพ 3', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'นักเรียนกำลังทำกิจกรรม (วิ่งกีฬาสี/เชียร์) สวมเสื้อสกรีนเหมือนกัน' },
          { slot: 'sports-1', label: 'ทีมกีฬา - ภาพหลัก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'ทีมฟุตบอล/วิ่ง 5-7 คน ใส่เสื้อทีมสกรีนชื่อ-เบอร์ ยืนรวมกัน ถ่ายก่อนแข่ง' },
          { slot: 'sports-2', label: 'ทีมกีฬา - ภาพ 2', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'นักกีฬากำลังเล่นกีฬา เห็นเสื้อทีมชัด ถ่ายมุมเฉียงเห็นลายสกรีนหน้า-หลัง' },
          { slot: 'sports-3', label: 'ทีมกีฬา - ภาพ 3', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'Close-up เสื้อกีฬา Dryfit เห็นเนื้อผ้าระบายอากาศ + ลายสกรีนคมชัด' },
          { slot: 'brand-1', label: 'แบรนด์เสื้อผ้า - ภาพหลัก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'Lookbook style — นางแบบ/นายแบบใส่เสื้อยืดสกรีนลาย street wear ถ่ายหน้ากำแพงปูนหรือย่านเมืองเก่า' },
          { slot: 'brand-2', label: 'แบรนด์เสื้อผ้า - ภาพ 2', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'Flat lay เสื้อยืดแบรนด์ วางบน surface ไม้ มี tag แบรนด์ ป้ายไซส์ ดูพรีเมียม' },
          { slot: 'brand-3', label: 'แบรนด์เสื้อผ้า - ภาพ 3', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'เสื้อยืดแขวนราว 3-4 ตัว ต่างสี ต่างลาย มี backdrop สวยๆ สไตล์ร้าน indie' },
          { slot: 'event-1', label: 'อีเวนต์/คอนเสิร์ต - ภาพหลัก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'กลุ่มคน 5-8 คน ใส่เสื้ออีเวนต์สีเดียวกัน (เช่น เสื้อวิ่ง) โชว์ลายหน้าอก ยิ้มร่าเริง' },
          { slot: 'event-2', label: 'อีเวนต์/คอนเสิร์ต - ภาพ 2', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'เสื้ออีเวนต์วางเรียง 4-5 ตัว บนโต๊ะลงทะเบียน มีป้ายชื่องานเป็น backdrop' },
          { slot: 'event-3', label: 'อีเวนต์/คอนเสิร์ต - ภาพ 3', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'คนกำลังรับเสื้ออีเวนต์ที่โต๊ะลงทะเบียน (ถ่ายเป็น candid บรรยากาศจริง)' },
          { slot: 'fanclub-1', label: 'แฟนคลับ - ภาพหลัก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'กลุ่มแฟนคลับ 3-5 คน ใส่เสื้อ FC สีสดใส มีลายศิลปิน ถ่ายหน้างานคอนเสิร์ต/แฟนมีท' },
          { slot: 'fanclub-2', label: 'แฟนคลับ - ภาพ 2', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'Close-up เสื้อ FC เห็นลายพิมพ์ DTF สีสดหลายสี คมชัด' },
          { slot: 'fanclub-3', label: 'แฟนคลับ - ภาพ 3', recommendedSize: '400x600', aspectRatio: '2:3', photographyBrief: 'เสื้อ FC หลายแบบวางเรียงกัน เป็นคอลเลคชั่น ดูครบเซ็ต' },
        ],
      },
      {
        id: 'services',
        label: 'Services Section',
        description: 'ภาพบริการต่างๆ ในหน้าแรก',
        slots: [
          { slot: 'service-printing', label: 'บริการสกรีน (Featured)', recommendedSize: '600x800', aspectRatio: '3:4', description: 'เครื่อง DTG กำลังพิมพ์', photographyBrief: 'เครื่อง DTG กำลังพิมพ์ลงเสื้อ เห็นลายสีสดออกมาบนผ้า ถ่ายมุมเฉียงจากด้านบน ให้เห็นทั้งเครื่องและเสื้อ' },
          { slot: 'service-blank', label: 'เสื้อเปล่า', recommendedSize: '600x400', aspectRatio: '3:2', photographyBrief: 'เสื้อเปล่าหลากสี 5-7 ตัว พับเรียงสวยงาม หรือแขวนราว บนพื้นหลังขาว ดูสะอาด' },
          { slot: 'service-photography', label: 'ถ่ายภาพสินค้า', recommendedSize: '600x400', aspectRatio: '3:2', photographyBrief: 'เบื้องหลัง studio — เห็นกล้อง ไฟสตูดิโอ หุ่นสวมเสื้อ และช่างภาพกำลังถ่าย' },
          { slot: 'service-design', label: 'ออกแบบกราฟิก', recommendedSize: '600x400', aspectRatio: '3:2', photographyBrief: 'ดีไซเนอร์กำลังวาดลายเสื้อบนจอคอม (Illustrator/Photoshop) เห็นจอชัด มี tablet วาดภาพ' },
          { slot: 'service-pattern', label: 'ทำแพทเทิร์น', recommendedSize: '600x400', aspectRatio: '3:2', photographyBrief: 'กระดาษแพทเทิร์นวางกางบนโต๊ะตัด มีสายวัด กรรไกร ดินสอ ดูเป็นงานฝีมือ' },
          { slot: 'service-fabric', label: 'เนื้อผ้าหลากหลาย', recommendedSize: '800x400', aspectRatio: '2:1', photographyBrief: 'ม้วนผ้าหลากสี 6-8 ม้วน เรียงซ้อนกัน ให้เห็นเนื้อผ้าที่แตกต่าง (cotton, polyester, dryfit)' },
          { slot: 'service-qc', label: 'QC & แพ็ค', recommendedSize: '800x400', aspectRatio: '2:1', photographyBrief: 'พนักงาน QC กำลังตรวจเสื้อ ถือเสื้อยกขึ้นส่องดูลายสกรีน มีเสื้อแพ็คเรียงกล่องพร้อมส่ง' },
        ],
      },
      {
        id: 'technology',
        label: 'Technology Section',
        description: 'ภาพเทคโนโลยีการสกรีน 3 แบบ',
        slots: [
          { slot: 'tech-dtg', label: 'เครื่อง DTG Printing', recommendedSize: '800x500', aspectRatio: '8:5', photographyBrief: 'เครื่อง DTG (Brother GTX PRO) กำลังพิมพ์ — เห็นหัวพิมพ์เคลื่อนที่ หมึกฉีดลงผ้า ถ่ายมุมเฉียง 45 องศา' },
          { slot: 'tech-dtf', label: 'เครื่อง DTF Printing', recommendedSize: '800x500', aspectRatio: '8:5', photographyBrief: 'เครื่อง DTF (Epson i3200) พิมพ์ลงฟิล์ม — เห็นฟิล์มใสลายสีสดออกจากเครื่อง ถ่ายด้านข้างเห็นกระบวนการ' },
          { slot: 'tech-silkscreen', label: 'Silk Screen', recommendedSize: '800x500', aspectRatio: '8:5', photographyBrief: 'ช่างสกรีนกำลังรูดสีผ่านตะแกรง (squeegee) — เห็นจอสกรีน มือจับไม้รูด หมึกสีสด ถ่ายจากด้านบนเฉียง' },
        ],
      },
      {
        id: 'portfolio',
        label: 'Portfolio Section',
        description: 'ผลงานที่ภาคภูมิใจ (แถบเลื่อน)',
        slots: [
          { slot: 'portfolio-1', label: 'ผลงานเสื้อบริษัท', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อโปโลยูนิฟอร์มพร้อมโลโก้ปัก ถ่าย flat lay หรือใส่หุ่น พื้นหลังสะอาด' },
          { slot: 'portfolio-2', label: 'ผลงานเสื้อโรงเรียน', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อกีฬาสี/เสื้อรุ่น สีสด มีชื่อสถาบัน ถ่ายใส่หุ่นหรือคนสวม' },
          { slot: 'portfolio-3', label: 'ผลงานเสื้อทีมกีฬา', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อฟุตบอล/วิ่ง Dryfit มีเบอร์หลัง ถ่ายให้เห็นทั้งหน้า-หลัง' },
          { slot: 'portfolio-4', label: 'ผลงานเสื้อแบรนด์', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อยืด street wear ลายสวย ถ่าย lifestyle มีคนสวมดูดี' },
          { slot: 'portfolio-5', label: 'ผลงานเสื้ออีเวนต์', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อวิ่งมาราธอน/เสื้องาน เห็นโลโก้งานชัด ถ่ายกับบรรยากาศงาน' },
          { slot: 'portfolio-6', label: 'ผลงานเสื้อ FC', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อแฟนคลับลายศิลปิน สีสด ถ่ายให้เห็นดีเทลพิมพ์' },
          { slot: 'portfolio-7', label: 'ผลงาน Hoodie', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'Hoodie สกรีนลาย ถ่ายใส่หุ่น ดูอบอุ่น สไตล์ casual' },
          { slot: 'portfolio-8', label: 'ผลงานเสื้อโปโล', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'โปโลปักโลโก้ ถ่าย close-up เห็นงานปักละเอียด' },
          { slot: 'portfolio-9', label: 'ผลงานเสื้อ Oversize', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อ Oversize สกรีนลาย ถ่ายมีคนสวม ดูทรง oversize ชัด' },
          { slot: 'portfolio-10', label: 'ผลงานเสื้อทีมวิ่ง', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อวิ่ง Dryfit มีโลโก้งาน ถ่ายกลุ่มนักวิ่งสวมเสื้อ' },
          { slot: 'portfolio-11', label: 'ผลงานเสื้อคอกลม', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อยืดคอกลมสกรีนลาย flat lay บนพื้นไม้ มี prop ประกอบ' },
          { slot: 'portfolio-12', label: 'ผลงานเสื้อแขนยาว', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อแขนยาว สกรีนลายที่แขน ถ่ายมีคนสวม สไตล์ street' },
          { slot: 'portfolio-13', label: 'ผลงานเสื้อคอปก', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อโปโลคอปกสกรีนโลโก้ ถ่ายแบบ flat lay หรือมีคนสวม เน้นงานปักหรือสกรีนที่อก' },
          { slot: 'portfolio-14', label: 'ผลงานเสื้อ Crop Top', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อ Crop Top สกรีนลาย ถ่ายสไตล์แฟชั่น เห็นทรงเสื้อและลายสกรีนชัด' },
          { slot: 'portfolio-15', label: 'ผลงานเสื้อสกรีนหลัง', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อสกรีนลายเต็มหลัง ถ่ายจากด้านหลัง เห็นลายสกรีนเต็มๆ สีสดชัด' },
          { slot: 'portfolio-16', label: 'ผลงานเสื้อทีมบาส', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อบาสเกตบอลสกรีนเบอร์และโลโก้ทีม ถ่ายแบบกีฬา สไตล์แอ็คทีฟ' },
        ],
      },
    ],
  },

  // ============================================================
  // หน้า Services
  // ============================================================
  {
    id: 'services-pages',
    label: 'Services',
    icon: 'Settings',
    sections: [
      {
        id: 'services-main',
        label: 'หน้า Services หลัก',
        description: 'ภาพบริการในหน้า /services',
        slots: [
          { slot: 'svc-printing', label: 'บริการสกรีน', recommendedSize: '600x400', photographyBrief: 'เครื่องสกรีนกำลังพิมพ์ เห็นลายสีสดออกจากเครื่อง ถ่ายมุมเฉียงให้ dynamic' },
          { slot: 'svc-pattern', label: 'ทำแพทเทิร์น', recommendedSize: '600x400', photographyBrief: 'กระดาษแพทเทิร์นกางบนโต๊ะตัดผ้า มีกรรไกร สายวัด ดินสอ เข็มหมุด' },
          { slot: 'svc-fabric', label: 'เนื้อผ้า', recommendedSize: '600x400', photographyBrief: 'ม้วนผ้าหลากสีเรียงชั้น close-up เห็นเนื้อผ้าที่แตกต่าง cotton vs polyester' },
          { slot: 'svc-design', label: 'ออกแบบกราฟิก', recommendedSize: '600x400', photographyBrief: 'ดีไซเนอร์กำลังออกแบบลายเสื้อ จอ Mac/PC แสดง artwork มี pen tablet' },
          { slot: 'svc-photography', label: 'ถ่ายภาพสินค้า', recommendedSize: '600x400', photographyBrief: 'เบื้องหลังสตูดิโอถ่ายสินค้า เห็นกล้อง softbox หุ่นสวมเสื้อ' },
          { slot: 'svc-qc', label: 'QC & แพ็ค', recommendedSize: '600x400', photographyBrief: 'พนักงานกำลังตรวจสอบและแพ็คเสื้อ กล่องพัสดุ bubble wrap สติ๊กเกอร์' },
        ],
      },
      {
        id: 'printing-main',
        label: 'หน้า Printing หลัก',
        description: 'ภาพในหน้า /services/printing',
        slots: [
          { slot: 'print-dtg', label: 'DTG Printing', recommendedSize: '600x400', photographyBrief: 'เครื่อง DTG พิมพ์ลงเสื้อโดยตรง เน้นหัวพิมพ์ฉีดหมึกลงบนผ้า cotton เห็นลายที่กำลังพิมพ์' },
          { slot: 'print-dtf', label: 'DTF Printing', recommendedSize: '600x400', photographyBrief: 'เครื่อง DTF พิมพ์ลงฟิล์ม เห็นฟิล์มลายสีสดกำลังออกจากเครื่อง มีม้วนฟิล์มด้านข้าง' },
          { slot: 'print-silkscreen', label: 'Silk Screen', recommendedSize: '600x400', photographyBrief: 'ช่างกำลังสกรีนด้วยมือ จอสกรีนวางบนเสื้อ มือจับ squeegee กำลังรูดสี' },
        ],
      },
      {
        id: 'printing-dtf',
        label: 'DTF Printing',
        description: 'หน้า /services/printing/dtf',
        slots: [
          { slot: 'dtf-process', label: 'ภาพรวมกระบวนการ DTF', recommendedSize: '1200x600', photographyBrief: 'ภาพ panoramic สายการผลิต DTF ทั้งหมด เห็นเครื่องพิมพ์ โรยผง อบ และรีด เรียงต่อกัน' },
          { slot: 'dtf-epson-i3200', label: 'เครื่องพิมพ์ Epson i3200', recommendedSize: '800x500', photographyBrief: 'เครื่อง DTF หัวพิมพ์ Epson i3200 เต็มตัว ถ่ายมุมเฉียง 3/4 มีฟิล์มกำลังพิมพ์' },
          { slot: 'dtf-printing', label: 'ขั้นตอนพิมพ์', recommendedSize: '600x400', photographyBrief: 'Close-up หัวพิมพ์กำลังฉีดหมึกลงบนฟิล์ม PET ลายสีสดค่อยๆ ปรากฏบนฟิล์มใส' },
          { slot: 'dtf-powder', label: 'ขั้นตอนโรยผง', recommendedSize: '600x400', photographyBrief: 'เครื่องโรยผง adhesive ลงบนฟิล์มที่พิมพ์แล้ว เห็นผงขาวกระจายบนลาย' },
          { slot: 'dtf-curing', label: 'ขั้นตอนอบ', recommendedSize: '600x400', photographyBrief: 'ฟิล์มเข้าเครื่องอบ เห็นฟิล์มเคลื่อนผ่านเตาอบ มีไฟ/ความร้อน' },
          { slot: 'dtf-transfer', label: 'ขั้นตอนรีดลงเสื้อ', recommendedSize: '600x400', photographyBrief: 'เครื่องรีดร้อน (heat press) กดฟิล์มลงบนเสื้อ เห็นมือวางฟิล์ม มีไอร้อน' },
          { slot: 'dtf-case-gym', label: 'Case Study: Gym Brand', recommendedSize: '600x400', photographyBrief: 'เสื้อกีฬา dryfit สีเข้ม โลโก้ gym สกรีน DTF สีสด ถ่ายคนใส่ยืนหน้า gym' },
          { slot: 'dtf-case-uniform', label: 'Case Study: Uniform', recommendedSize: '600x400', photographyBrief: 'เสื้อยูนิฟอร์มบริษัท โลโก้องค์กรสกรีน DTF ถ่ายกลุ่มพนักงาน 3-4 คนใส่' },
        ],
      },
      {
        id: 'printing-dtg',
        label: 'DTG Printing',
        description: 'หน้า /services/printing/dtg',
        slots: [
          { slot: 'dtg-process', label: 'ภาพรวมกระบวนการ DTG', recommendedSize: '1200x600', photographyBrief: 'ภาพ panoramic กระบวนการ DTG เห็น pretreatment → พิมพ์ → อบ → QC เรียงต่อกัน' },
          { slot: 'dtg-brother-gtx', label: 'เครื่องพิมพ์ Brother GTX', recommendedSize: '800x500', photographyBrief: 'เครื่อง Brother GTX PRO เต็มตัว เปิดฝาเห็นหัวพิมพ์ มีเสื้อขาวอยู่ใน platen มุมเฉียง' },
          { slot: 'dtg-pretreatment', label: 'ขั้นตอน Pre-treatment', recommendedSize: '600x400', photographyBrief: 'พนักงานฉีดน้ำยา pretreat ลงบนเสื้อสีเข้ม ด้วยเครื่อง/ปืนสเปรย์ เห็นน้ำยาเปียกบนผ้า' },
          { slot: 'dtg-printing', label: 'ขั้นตอนพิมพ์', recommendedSize: '600x400', photographyBrief: 'หัวพิมพ์ DTG กำลังฉีดหมึกลงบนเสื้อโดยตรง close-up เห็นหมึกพ่นลงผ้า ลายค่อยๆ ปรากฏ' },
          { slot: 'dtg-curing', label: 'ขั้นตอนอบ', recommendedSize: '600x400', photographyBrief: 'เสื้อเข้าเครื่องอบ heat press หรือ tunnel dryer เห็นเสื้อบนสายพานเข้าเตา' },
          { slot: 'dtg-qc', label: 'ขั้นตอน QC', recommendedSize: '600x400', photographyBrief: 'พนักงานตรวจสอบเสื้อ DTG ที่พิมพ์เสร็จ ถือเสื้อส่องดู เปรียบเทียบสีกับจอ' },
          { slot: 'dtg-case-artist', label: 'Case Study: Artist Brand', recommendedSize: '600x400', photographyBrief: 'เสื้อ cotton ขาว ลายวาดมือ/illustration ละเอียด สีสดใส ถ่ายมีศิลปินยืนข้างๆ' },
          { slot: 'dtg-case-wedding', label: 'Case Study: Wedding Gift', recommendedSize: '600x400', photographyBrief: 'เสื้อของชำร่วยงานแต่ง สีพาสเทล พิมพ์ชื่อคู่บ่าวสาว ถ่ายวางบนโต๊ะตกแต่งสวยๆ' },
        ],
      },
      {
        id: 'printing-silkscreen',
        label: 'Silk Screen',
        description: 'หน้า /services/printing/silkscreen',
        slots: [
          { slot: 'silk-process', label: 'ภาพรวมกระบวนการ Silk Screen', recommendedSize: '1200x600', photographyBrief: 'ภาพ panoramic กระบวนการ Silk Screen เห็นทำฟิล์ม → ทำจอ → สกรีน → อบ เรียงต่อกัน' },
          { slot: 'silk-film', label: 'ขั้นตอนทำฟิล์ม', recommendedSize: '600x400', photographyBrief: 'ฟิล์มบวก (positive film) วางบนเครื่อง เห็นลายสกรีนบนฟิล์มใส' },
          { slot: 'silk-screen', label: 'ขั้นตอนทำจอ', recommendedSize: '600x400', photographyBrief: 'จอสกรีน (screen frame) หลังล้างยา เห็นลายทะลุแสง ถือจอส่องแสงจากด้านหลัง' },
          { slot: 'silk-printing', label: 'ขั้นตอนพิมพ์', recommendedSize: '600x400', photographyBrief: 'ช่างกำลังรูด squeegee ข้ามจอสกรีน เห็นหมึกลาดผ่าน มีเสื้ออยู่ข้างใต้' },
          { slot: 'silk-curing', label: 'ขั้นตอนอบ', recommendedSize: '600x400', photographyBrief: 'เสื้อสกรีนเสร็จเข้าเครื่องอบ เห็นเสื้อเคลื่อนผ่านสายพาน ความร้อน' },
          { slot: 'silk-case-marathon', label: 'Case Study: Marathon', recommendedSize: '600x400', photographyBrief: 'เสื้อวิ่งมาราธอน dryfit สีสด โลโก้งาน+สปอนเซอร์ ถ่ายหลายตัว/มีคนใส่กำลังวิ่ง' },
          { slot: 'silk-case-factory', label: 'Case Study: Factory Uniform', recommendedSize: '600x400', photographyBrief: 'เสื้อยูนิฟอร์มโรงงาน cotton/TC สีเข้ม สกรีนโลโก้ 1-2 สี ถ่ายกลุ่มพนักงานใส่' },
        ],
      },
      {
        id: 'gallery-dtf',
        label: 'DTF Gallery',
        description: 'แกลเลอรีผลงาน DTF',
        slots: [
          { slot: 'dtf-work-1', label: 'ผลงาน DTF 1', recommendedSize: '600x400', photographyBrief: 'เสื้อสีเข้มลายกราฟิกสีสด โชว์พิมพ์สีบนผ้าเข้ม' },
          { slot: 'dtf-work-2', label: 'ผลงาน DTF 2', recommendedSize: '600x400', photographyBrief: 'เสื้อ polyester ลายภาพถ่าย/gradient โชว์ความละเอียด' },
          { slot: 'dtf-work-3', label: 'ผลงาน DTF 3', recommendedSize: '600x400', photographyBrief: 'เสื้อทีมกีฬา dryfit มีเบอร์/ชื่อหลัง โชว์ความทนทาน' },
          { slot: 'dtf-work-4', label: 'ผลงาน DTF 4', recommendedSize: '600x400', photographyBrief: 'เสื้อแฟนคลับลายเต็มตัว full-print โชว์พื้นที่พิมพ์ใหญ่' },
          { slot: 'dtf-work-5', label: 'ผลงาน DTF 5', recommendedSize: '600x400', photographyBrief: 'Hoodie สกรีน DTF บนผ้า fleece โชว์ความหลากหลายของผ้า' },
          { slot: 'dtf-work-6', label: 'ผลงาน DTF 6', recommendedSize: '600x400', photographyBrief: 'เสื้อวิ่ง Dri-FIT สกรีน DTF ลายสด ถ่ายมีคนสวมกำลังวิ่ง' },
          { slot: 'dtf-work-7', label: 'ผลงาน DTF 7', recommendedSize: '600x400', photographyBrief: 'เสื้อ Oversize สกรีน DTF ลายเต็มตัว สีสดบนผ้าเข้ม' },
          { slot: 'dtf-work-8', label: 'ผลงาน DTF 8', recommendedSize: '600x400', photographyBrief: 'เสื้อโปโล DTF โลโก้คมชัด ทนซัก ถ่าย close-up บริเวณโลโก้' },
          { slot: 'dtf-work-9', label: 'ผลงาน DTF 9', recommendedSize: '600x400', photographyBrief: 'เสื้อแขนยาว DTF สกรีนรอบแขน ถ่ายมุมเห็นลายทั้งตัว' },
          { slot: 'dtf-work-10', label: 'ผลงาน DTF 10', recommendedSize: '600x400', photographyBrief: 'เสื้อทีมกีฬา DTF สีสดยืดหยุ่นตามผ้า ถ่ายขณะเล่นกีฬา' },
        ],
      },
      {
        id: 'gallery-dtg',
        label: 'DTG Gallery',
        description: 'แกลเลอรีผลงาน DTG',
        slots: [
          { slot: 'dtg-work-1', label: 'ผลงาน DTG 1', recommendedSize: '600x400', photographyBrief: 'เสื้อ cotton ขาว ลายภาพวาดสีน้ำ watercolor โชว์ความนุ่มนวลของสี' },
          { slot: 'dtg-work-2', label: 'ผลงาน DTG 2', recommendedSize: '600x400', photographyBrief: 'เสื้อ cotton ดำ ลาย CMYK สีสด โชว์พิมพ์บนสีเข้มด้วย white ink' },
          { slot: 'dtg-work-3', label: 'ผลงาน DTG 3', recommendedSize: '600x400', photographyBrief: 'เสื้อ cotton ลายภาพถ่าย photo-realistic โชว์ความละเอียด' },
          { slot: 'dtg-work-4', label: 'ผลงาน DTG 4', recommendedSize: '600x400', photographyBrief: 'เสื้อยืดแบรนด์ ลายโลโก้ minimal 1-2 สี โชว์ความคม' },
          { slot: 'dtg-work-5', label: 'ผลงาน DTG 5', recommendedSize: '600x400', photographyBrief: 'เสื้อเด็ก/ไซส์พิเศษ ลายน่ารัก โชว์ความยืดหยุ่น' },
          { slot: 'dtg-work-6', label: 'ผลงาน DTG 6', recommendedSize: '600x400', photographyBrief: 'เสื้อ Full Color Print พิมพ์สีเต็มพื้นที่ สดใสละเอียด' },
          { slot: 'dtg-work-7', label: 'ผลงาน DTG 7', recommendedSize: '600x400', photographyBrief: 'เสื้อพิมพ์ Portrait Art ภาพบุคคล สมจริงทุกเฉดสี' },
          { slot: 'dtg-work-8', label: 'ผลงาน DTG 8', recommendedSize: '600x400', photographyBrief: 'เสื้อลายวินเทจ ดีไซน์ย้อนยุค สวยคลาสสิก' },
          { slot: 'dtg-work-9', label: 'ผลงาน DTG 9', recommendedSize: '600x400', photographyBrief: 'เสื้อ Custom สั่งทำตามแบบลูกค้า ถ่ายมุมเห็นรายละเอียด' },
          { slot: 'dtg-work-10', label: 'ผลงาน DTG 10', recommendedSize: '600x400', photographyBrief: 'เสื้อ Limited Edition คอลเลคชั่นพิเศษ จำนวนจำกัด ถ่ายสไตล์ lookbook' },
        ],
      },
      {
        id: 'gallery-silk',
        label: 'Silk Screen Gallery',
        description: 'แกลเลอรีผลงาน Silk Screen',
        slots: [
          { slot: 'silk-work-1', label: 'ผลงาน Silk Screen 1', recommendedSize: '600x400', photographyBrief: 'เสื้อจำนวนมาก 50+ ตัว วางเรียง โชว์ปริมาณที่ผลิตได้' },
          { slot: 'silk-work-2', label: 'ผลงาน Silk Screen 2', recommendedSize: '600x400', photographyBrief: 'เสื้อสกรีน 1 สี เน้นความคมของเส้น/ตัวอักษร' },
          { slot: 'silk-work-3', label: 'ผลงาน Silk Screen 3', recommendedSize: '600x400', photographyBrief: 'เสื้อสกรีนหลายสี (multi-color) เห็นสีซ้อนลงตัว' },
          { slot: 'silk-work-4', label: 'ผลงาน Silk Screen 4', recommendedSize: '600x400', photographyBrief: 'เสื้อสกรีนหมึกพิเศษ (metallic/glow/puff) ถ้ามี' },
          { slot: 'silk-work-5', label: 'ผลงาน Silk Screen 5', recommendedSize: '600x400', photographyBrief: 'เสื้อวิ่ง/กีฬาสกรีน silk screen จำนวน 100+ ตัว' },
          { slot: 'silk-work-6', label: 'ผลงาน Silk Screen 6', recommendedSize: '600x400', photographyBrief: 'เสื้อมาราธอน 2,000 ตัว สกรีนหลายสี โชว์ปริมาณงานใหญ่' },
          { slot: 'silk-work-7', label: 'ผลงาน Silk Screen 7', recommendedSize: '600x400', photographyBrief: 'เสื้อค่าย/Camp สีสันสดใส ถ่ายเด็กนักเรียนใส่ทำกิจกรรม' },
          { slot: 'silk-work-8', label: 'ผลงาน Silk Screen 8', recommendedSize: '600x400', photographyBrief: 'เสื้อสัมมนา/ประชุม สกรีนโลโก้งาน ราคาประหยัด จำนวนมาก' },
          { slot: 'silk-work-9', label: 'ผลงาน Silk Screen 9', recommendedSize: '600x400', photographyBrief: 'เสื้อคอนเสิร์ต สีเด่น ทนทาน ถ่ายมีคนใส่ในบรรยากาศงาน' },
          { slot: 'silk-work-10', label: 'ผลงาน Silk Screen 10', recommendedSize: '600x400', photographyBrief: 'เสื้อ Charity Run งานวิ่งการกุศล ถ่ายกลุ่มนักวิ่งใส่เสื้อเดียวกัน' },
        ],
      },
      {
        id: 'customers',
        label: 'Customer Photos',
        description: 'รูปลูกค้าสำหรับ Testimonials',
        slots: [
          { slot: 'customer-coach', label: 'ลูกค้า: Coach', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot โค้ชกีฬา สวมเสื้อกีฬา ยิ้ม พื้นหลังเบลอ' },
          { slot: 'customer-p', label: 'ลูกค้า: P', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot เจ้าของธุรกิจ ดูเป็นมืออาชีพ พื้นหลังเบลอ' },
          { slot: 'customer-som', label: 'ลูกค้า: Som', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot เจ้าของร้าน ยิ้มอบอุ่น พื้นหลังเบลอ' },
          { slot: 'customer-gym', label: 'ลูกค้า: Gym', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot เจ้าของ gym สวมเสื้อกีฬา พื้นหลังเบลอ' },
          { slot: 'customer-art', label: 'ลูกค้า: Art', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot ศิลปิน/ดีไซเนอร์ สไตล์ creative พื้นหลังเบลอ' },
          { slot: 'customer-mint', label: 'ลูกค้า: Mint', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot เจ้าของแบรนด์ ผู้หญิง ดูทันสมัย พื้นหลังเบลอ' },
          { slot: 'customer-tom', label: 'ลูกค้า: Tom', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot ผู้จัด event ดู active พื้นหลังเบลอ' },
          { slot: 'customer-jane', label: 'ลูกค้า: Jane', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot ลูกค้างานแต่ง ดูสดใส พื้นหลังเบลอ' },
          { slot: 'customer-somchai', label: 'ลูกค้า: Somchai', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot เจ้าของธุรกิจเชียงใหม่ วัยกลางคน พื้นหลังเบลอ' },
          { slot: 'customer-noi', label: 'ลูกค้า: Noi', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot ครู/อาจารย์ ดูน่าเชื่อถือ พื้นหลังเบลอ' },
          { slot: 'customer-teacher', label: 'ลูกค้า: Teacher', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot ครู ดูอบอุ่น เป็นกันเอง พื้นหลังเบลอ' },
          { slot: 'customer-captain', label: 'ลูกค้า: Captain', recommendedSize: '200x200', aspectRatio: '1:1', photographyBrief: 'Portrait headshot กัปตันทีมกีฬา สวมเสื้อทีม พื้นหลังเบลอ' },
        ],
      },
      {
        id: 'compare-dtf-vs-dtg',
        label: 'หน้าเปรียบเทียบ DTF vs DTG',
        description: 'ภาพเปรียบเทียบงานจริงในหน้า /dtf-vs-dtg',
        slots: [
          { slot: 'compare-dtf', label: 'ภาพงาน DTF จริง', recommendedSize: '800x800', aspectRatio: '1:1', photographyBrief: 'เสื้อสกรีน DTF ลายสีสด คมชัด ถ่าย close-up เห็นลายสกรีนและเนื้อผ้าชัดเจน เน้นความคมของลายเส้น' },
          { slot: 'compare-dtg', label: 'ภาพงาน DTG จริง', recommendedSize: '800x800', aspectRatio: '1:1', photographyBrief: 'เสื้อสกรีน DTG ลายภาพถ่าย/ไล่สี ถ่าย close-up เห็นความนุ่มนวลของสีที่ซึมลงผ้า เน้นการไล่เฉดสี' },
          { slot: 'compare-silk', label: 'ภาพงาน Silk Screen จริง', recommendedSize: '800x800', aspectRatio: '1:1', photographyBrief: 'เสื้อสกรีน Silk Screen ลายโลโก้ 1-2 สี ถ่าย close-up เห็นสีทึบแน่น คมชัด เน้นความทนทานของหมึก' },
        ],
      },
      {
        id: 'fabric-page',
        label: 'หน้า Fabric',
        description: 'หน้า /services/fabric',
        slots: [
          { slot: 'fabric-cotton', label: 'ผ้า Cotton', recommendedSize: '600x400', photographyBrief: 'Close-up เนื้อผ้า cotton สีขาว เห็นลายทอชัด พับ 3-4 ชิ้นซ้อน อาจมีมือจับยืดให้เห็นเนื้อ' },
          { slot: 'fabric-polyester', label: 'ผ้า Polyester', recommendedSize: '600x400', photographyBrief: 'Close-up เนื้อผ้า polyester เรียบลื่น แสงสะท้อนนิดหน่อย ผ้าสีสดหลายสีพับเรียง' },
          { slot: 'fabric-dryfit', label: 'ผ้า Dryfit', recommendedSize: '600x400', photographyBrief: 'Close-up เนื้อผ้า dryfit เห็นรูระบายอากาศ (mesh) ชัด อาจหยดน้ำให้เห็นแห้งเร็ว' },
        ],
      },
      {
        id: 'pattern-page',
        label: 'หน้า Pattern',
        description: 'หน้า /services/pattern',
        slots: [
          { slot: 'pattern-new', label: 'สร้างแพทเทิร์นใหม่', recommendedSize: '600x400', photographyBrief: 'กระดาษแพทเทิร์นขาวกางบนโต๊ะใหญ่ มีเส้นดินสอ ตลับเมตร ไม้บรรทัด กรรไกร' },
          { slot: 'pattern-modify', label: 'แก้ไขแพทเทิร์น', recommendedSize: '600x400', photographyBrief: 'มือช่างกำลังวัด/ขีดเส้นบนแพทเทิร์นเดิม มีแพทเทิร์นเก่า+ใหม่วางเทียบกัน' },
          { slot: 'pattern-grading', label: 'Grading', recommendedSize: '600x400', photographyBrief: 'แพทเทิร์นหลายไซส์ (S,M,L,XL) วางซ้อนกัน เห็นเส้นขยาย/หดตัว สีปากกาคนละสี' },
        ],
      },
    ],
  },

  // ============================================================
  // หน้า Products
  // ============================================================
  {
    id: 'products-page',
    label: 'Products',
    icon: 'ShoppingBag',
    sections: [
      {
        id: 'products',
        label: 'สินค้าเสื้อเปล่า',
        description: 'ภาพสินค้าเสื้อเปล่า 12 รายการ',
        slots: [
          { slot: 'product-cotton-basic', label: 'Cotton Basic', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อยืดคอกลม Cotton สีขาว ใส่หุ่น/flat lay พื้นหลังขาว เห็นทรงคอกลม ตะเข็บคู่' },
          { slot: 'product-cotton-premium', label: 'Cotton Premium', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อยืด Cotton Premium สีขาว เน้นเนื้อผ้าหนากว่า ดูพรีเมียมกว่า basic' },
          { slot: 'product-cotton-vneck', label: 'Cotton V-Neck', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อยืดคอวี Cotton สีขาว ให้เห็นคอวีชัด เทียบกับคอกลม' },
          { slot: 'product-polo-classic', label: 'Polo Classic', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อโปโล Classic สีขาว ให้เห็นปก กระดุม 3 เม็ด ทรง classic' },
          { slot: 'product-polo-sport', label: 'Polo Sport', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อโปโล Dryfit สีขาว ให้เห็นเนื้อผ้า dryfit ที่ต่างจาก polo cotton' },
          { slot: 'product-dryfit-sport', label: 'Dryfit Sport', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อกีฬา Dryfit คอกลม สีขาว ให้เห็นทรง sport fit เนื้อผ้าระบาย' },
          { slot: 'product-dryfit-vneck', label: 'Dryfit V-Neck', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อกีฬาคอวี Dryfit สีขาว ให้เห็นคอวี + เนื้อผ้า dryfit' },
          { slot: 'product-tank-top', label: 'Tank Top', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อกล้าม Cotton สีขาว ให้เห็นคอกลม สายกว้าง ทรงเสื้อกล้าม' },
          { slot: 'product-oversized-tee', label: 'Oversized Tee', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อ Oversized สีขาว ให้เห็นทรงหลวม ไหล่ตก แขนกว้าง' },
          { slot: 'product-oversized-heavyweight', label: 'Oversized Heavyweight', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อ Oversized Heavyweight สีขาว เน้นความหนาของผ้า อาจพับให้เห็นความหนา' },
          { slot: 'product-longsleeve', label: 'Longsleeve Cotton', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อแขนยาว Cotton สีขาว ให้เห็นแขนยาวเต็มตัว ทรงเสื้อ' },
          { slot: 'product-longsleeve-dryfit', label: 'Longsleeve Dryfit', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'เสื้อแขนยาว Dryfit สีขาว ให้เห็นเนื้อ dryfit + แขนยาว' },
        ],
      },
    ],
  },

  // ============================================================
  // หน้า About
  // ============================================================
  {
    id: 'about-page',
    label: 'About',
    icon: 'Info',
    sections: [
      {
        id: 'about',
        label: 'เกี่ยวกับเรา',
        description: 'ภาพในหน้า /about',
        slots: [
          { slot: 'about-hero', label: 'ทีมงานปรึกษาลูกค้า', recommendedSize: '1200x600', aspectRatio: '2:1', photographyBrief: 'ทีมงาน 3-5 คนกำลังประชุม/ปรึกษาลูกค้าที่โต๊ะ มีตัวอย่างเสื้อวางบนโต๊ะ บรรยากาศเป็นมืออาชีพ แต่เป็นกันเอง' },
          { slot: 'about-dtg-printer', label: 'เครื่อง DTG Printer', recommendedSize: '600x400', photographyBrief: 'เครื่อง DTG กำลังพิมพ์ ถ่ายมุมเห็นทั้งเครื่องและพนักงานที่ดูแล' },
          { slot: 'about-quality-check', label: 'ตรวจสอบคุณภาพ', recommendedSize: '600x400', photographyBrief: 'พนักงาน QC ตรวจสอบเสื้อ ถือส่องดูลายพิมพ์ใกล้ๆ มี loupe หรือแว่นขยาย' },
          { slot: 'about-dtf-film', label: 'ฟิล์ม DTF', recommendedSize: '600x400', photographyBrief: 'ฟิล์ม DTF ที่พิมพ์+โรยผงแล้ว ลายสีสด วางบนโต๊ะ ถ่าย close-up' },
          { slot: 'about-designer', label: 'นักออกแบบ', recommendedSize: '600x400', photographyBrief: 'ดีไซเนอร์นั่งทำงานหน้าจอคอม จอแสดง artwork เสื้อ มี pen tablet' },
          { slot: 'about-team-meeting', label: 'ประชุมทีม', recommendedSize: '600x400', photographyBrief: 'ทีมงาน 4-6 คนคุยกันที่โต๊ะ มี whiteboard มีตัวอย่างเสื้อ บรรยากาศ creative' },
          { slot: 'about-technician', label: 'ช่างเทคนิค', recommendedSize: '600x400', photographyBrief: 'ช่างซ่อม/ดูแลเครื่องสกรีน มีเครื่องมือ ถ่ายมุมเห็นทักษะความชำนาญ' },
          { slot: 'about-artwork', label: 'งานศิลปะ', recommendedSize: '600x400', photographyBrief: 'เสื้อลาย artwork สวยๆ จัดวางเป็น flat lay หลายตัว ลายหลากหลาย' },
          { slot: 'about-shirts', label: 'เสื้อพับเรียง', recommendedSize: '600x400', photographyBrief: 'เสื้อพับเรียงสีสด หลายสี วางเป็นชั้นๆ มุมบนถ่าย overhead ดู organized' },
          { slot: 'about-founder', label: 'ผู้ก่อตั้ง', recommendedSize: '600x600', aspectRatio: '1:1', photographyBrief: 'Portrait ผู้ก่อตั้ง ครึ่งตัว ยืนกอดอก ยิ้มมั่นใจ มีเครื่องจักรเบลอเป็นพื้นหลัง' },
        ],
      },
    ],
  },

  // ============================================================
  // หน้า Portfolio (dedicated page)
  // ============================================================
  {
    id: 'portfolio-page',
    label: 'Portfolio',
    icon: 'Image',
    sections: [
      {
        id: 'portfolio-cases',
        label: 'Case Studies',
        description: 'ภาพ Case Study ในหน้า /portfolio',
        slots: [
          { slot: 'case-error404-brand', label: 'Case: ERROR 404 Brand', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อแบรนด์ ERROR 404 หลายตัว จัด display แบบแบรนด์ มีถุง/tag ถ่ายสไตล์ lookbook' },
          { slot: 'case-green-bean-cafe', label: 'Case: Green Bean Cafe', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อยูนิฟอร์มร้านกาแฟ Green Bean พนักงานสวมยืนหน้าร้าน/บาร์กาแฟ' },
          { slot: 'case-chiang-mai-run', label: 'Case: Chiang Mai Run', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อวิ่ง Chiang Mai Run dryfit สีสด ถ่ายมีนักวิ่งใส่ หรือจัดหลายตัวเรียงกัน' },
          { slot: 'case-lanna-artist', label: 'Case: Lanna Artist', recommendedSize: '800x600', aspectRatio: '4:3', photographyBrief: 'เสื้อลาย artwork ล้านนา cotton premium ถ่ายสไตล์ artistic มีศิลปิน/คนใส่ในเชียงใหม่' },
        ],
      },
    ],
  },

  // ============================================================
  // หน้า Calculator
  // ============================================================
  {
    id: 'calculator-page',
    label: 'Calculator',
    icon: 'Calculator',
    sections: [
      {
        id: 'calculator',
        label: 'ภาพสินค้าในเครื่องคิดราคา',
        description: 'ภาพสินค้าที่แสดงในหน้าคิดราคา',
        slots: [
          { slot: 'calc-cotton-comb', label: 'Cotton Comb No.32', recommendedSize: '400x400', aspectRatio: '1:1', photographyBrief: 'เสื้อ Cotton Comb เกรด 32 สีขาว ถ่าย flat lay/หุ่น พื้นหลังขาว เน้นเนื้อผ้าเนียน' },
          { slot: 'calc-cotton-semi', label: 'Cotton Semi No.32', recommendedSize: '400x400', aspectRatio: '1:1', photographyBrief: 'เสื้อ Cotton Semi สีขาว ถ่ายเหมือนกัน เน้นความแตกต่างเนื้อผ้าจาก Comb' },
          { slot: 'calc-dry-tech', label: 'Dry-Tech', recommendedSize: '400x400', aspectRatio: '1:1', photographyBrief: 'เสื้อ Dry-Tech สีขาว ให้เห็นเนื้อผ้าเทคนิค ระบายอากาศ' },
          { slot: 'calc-polo-pique', label: 'Polo Pique', recommendedSize: '400x400', aspectRatio: '1:1', photographyBrief: 'เสื้อ Polo ผ้า Pique สีขาว ให้เห็นปกโปโลและลายทอ pique ชัด' },
          { slot: 'calc-fleece-hoodie', label: 'Fleece Hoodie', recommendedSize: '400x400', aspectRatio: '1:1', photographyBrief: 'Hoodie ผ้า Fleece สีเทาหรือดำ ให้เห็น hood ซิป กระเป๋าหน้า' },
        ],
      },
    ],
  },

  // ============================================================
  // หน้า Blog
  // ============================================================
  {
    id: 'blog-page',
    label: 'Blog',
    icon: 'FileText',
    sections: [
      {
        id: 'blog',
        label: 'ภาพบทความ',
        description: 'ภาพ Featured สำหรับบทความ',
        slots: [
          { slot: 'blog-dtf-printing-guide', label: 'DTF Printing Guide', recommendedSize: '1200x630', aspectRatio: '1.9:1', photographyBrief: 'ภาพ cover บทความ DTF มุมมองจากด้านบน เครื่อง DTF กำลังพิมพ์ เห็นลายสีสด มีพื้นที่วาง text overlay' },
        ],
      },
    ],
  },
];

// Helper to get all slots as a flat array
export function getAllSlots(): { section: string; slot: string; label: string }[] {
  const result: { section: string; slot: string; label: string }[] = [];
  for (const page of imageSlotConfig) {
    for (const section of page.sections) {
      for (const slot of section.slots) {
        result.push({ section: section.id, slot: slot.slot, label: slot.label });
      }
    }
  }
  return result;
}

// Helper to find a slot config
export function findSlotConfig(sectionId: string, slotId: string): ImageSlotConfig | undefined {
  for (const page of imageSlotConfig) {
    for (const section of page.sections) {
      if (section.id === sectionId) {
        return section.slots.find(s => s.slot === slotId);
      }
    }
  }
  return undefined;
}
