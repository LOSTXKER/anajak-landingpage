'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import FallbackImage from './FallbackImage';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Header */}
      <div className="relative h-56 overflow-hidden">
        <FallbackImage src={service.image} alt={service.title} />
        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge */}
        {service.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-white text-slate-900 text-sm font-bold rounded-full shadow-lg">
              {service.badge}
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="absolute top-4 right-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
          <p className="text-white/80">{service.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-slate-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Use Cases */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-ci-yellow" />
            ตัวอย่างการใช้งาน
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {service.useCases.map((useCase, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                <useCase.icon className="w-4 h-4 text-ci-blue flex-shrink-0" />
                <span>{useCase.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
              >
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={service.link}
          className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all`}
        >
          ดูรายละเอียดเพิ่มเติม
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
