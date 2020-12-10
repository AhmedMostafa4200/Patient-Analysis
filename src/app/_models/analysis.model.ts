export class PatientAnalysis {
    id: number
    name?: string
    illness?: string
    lastVisit?: string
    nextVisit? :string
    medicalHistory?: string
    previousSurgeries? :string[]
    allergicTo?: string[]
    contacts?: string[]
    uponEmergencyCall?: {name?: string, phone?: string}[]
    status?: string
}