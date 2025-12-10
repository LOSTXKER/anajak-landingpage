'use client';

import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { Section, SectionHeader, Card, Input, Textarea, Button, IconBox } from '@/components/ui';

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  return (
    <Section id="contact" background="white" className={className}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="ติดต่อเรา"
          badgeIcon={Phone}
          badgeVariant="primary"
          title="พร้อมเริ่มผลิตแล้วหรือยัง?"
          subtitle="ติดต่อเราวันนี้เพื่อปรึกษาและขอใบเสนอราคา<br />ฟรี ไม่มีค่าใช้จ่าย"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="flat" padding="lg" hover={false}>
              <h3 className="font-bold text-xl text-slate-900 mb-6">ช่องทางการติดต่อ</h3>
              
              <div className="space-y-4">
                <a 
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <IconBox icon={Phone} color="blue" className="group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-slate-500">โทรศัพท์</p>
                    <p className="font-bold text-slate-900">{siteConfig.phone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <IconBox icon={Mail} color="purple" className="group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-slate-500">อีเมล</p>
                    <p className="font-bold text-slate-900">{siteConfig.email}</p>
                  </div>
                </a>

                <a 
                  href={siteConfig.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <IconBox icon={MessageCircle} color="green" className="group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-slate-500">LINE Official</p>
                    <p className="font-bold text-slate-900">{siteConfig.lineId}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <IconBox icon={MapPin} color="orange" />
                  <div>
                    <p className="text-sm text-slate-500">ที่อยู่</p>
                    <p className="font-bold text-slate-900">{siteConfig.address.street}</p>
                    <p className="text-sm text-slate-600">{siteConfig.address.city}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card variant="flat" padding="lg" hover={false}>
              <h3 className="font-bold text-lg text-slate-900 mb-4">เวลาทำการ</h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>จันทร์ - ศุกร์:</span>
                  <span className="font-medium">{siteConfig.businessHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span>เสาร์:</span>
                  <span className="font-medium">{siteConfig.businessHours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span>อาทิตย์:</span>
                  <span className="font-medium text-red-600">{siteConfig.businessHours.sunday}</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card variant="gradient" padding="lg" hover={false}>
            <h3 className="font-bold text-2xl mb-2">ขอใบเสนอราคา</h3>
            <p className="text-blue-100 mb-6">กรอกข้อมูลด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
            
            <form className="space-y-4">
              <Input 
                label="ชื่อ-นามสกุล"
                placeholder="กรอกชื่อ-นามสกุล"
                variant="dark"
                required
              />
              
              <Input 
                type="tel"
                label="เบอร์โทรศัพท์"
                placeholder="กรอกเบอร์โทรศัพท์"
                variant="dark"
                required
              />
              
              <Input 
                type="email"
                label="อีเมล"
                placeholder="กรอกอีเมล"
                variant="dark"
              />
              
              <Textarea 
                label="รายละเอียดความต้องการ"
                placeholder="เช่น ต้องการสั่งผลิตเสื้อยืด 100 ตัว..."
                variant="dark"
                rows={4}
                required
              />
              
              <Button 
                type="submit"
                variant="success"
                fullWidth
                className="!bg-ci-yellow !text-slate-900 hover:!bg-yellow-400"
              >
                ส่งข้อมูล
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
