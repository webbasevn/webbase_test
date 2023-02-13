import * as yup from 'yup'

const loginSchema = yup.object({
    username: yup
        .string()
        .email('Email không đúng, vui lòng kiểm tra lại')
        .required('Email không được bỏ trống'),
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
})

const starterSchema = yup.object({
    firstName: yup
        .string()
        .required('Vui lòng nhập tên của bạn'),
    lastName: yup
        .string()
        .required('Vui lòng nhập họ của bạn'),
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
    repeatPassword: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})
const registerSchema = yup.object({
    firstName: yup
        .string()
        .required('Vui lòng nhập tên của bạn'),
    lastName: yup
        .string()
        .required('Vui lòng nhập họ của bạn'),
    email: yup
        .string()
        .email('Email không đúng, vui lòng kiểm tra lại')
        .required('Vui lòng nhập email của bạn'),
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
    repeatPassword: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})

const vertifySchema = yup.object({
    code: yup
        .number()
        .min(6, 'Số xác minh gồm 6 số')
        .required('Số xác minh không được bỏ trống')
})

const forgotPasswordSchema = yup.object({
    email: yup
        .string()
        .email('Email không đúng, vui lòng kiểm tra lại')
        .required('Vui lòng nhập email của bạn'),
})

const setNewPasswordSchema = yup.object({
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
    repeatPassword: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})

const userInfoSchema = yup.object({
    firstName: yup
        .string()
        .required('Vui lòng nhập tên của bạn'),
    lastName: yup
        .string()
        .required('Vui lòng nhập họ của bạn'),
    address: yup
        .string()
        .required('Vui lòng nhập địa chỉ của bạn'),
})

const userSecuritySchema =  yup.object({
    currentPassword: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống'),
    password: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống')
        .notOneOf([yup.ref('currentPassword'), null], 'Mật khẩu mới phải khác mật khẩu cũ'),
    repeatPassword: yup
        .string()
        .min(8, 'Mật khẩu phải có tối thiểu 8 ký tự')
        .required('Mật khẩu không được bỏ trống')
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
})

const billingsSchema = yup.object({
    company: yup
        .string()
        .required("Thông tin này là bắt buộc"),
    taxId: yup
        .number()
        .typeError('Mã số thuế là dạng số')
        .required("Thông tin này là bắt buộc"),
    address: yup
        .string()
        .required("Thông tin này là bắt buộc"),
    phone: yup
        .string()
        .required("Thông tin này là bắt buộc"),
    email: yup
        .string()
        .email("Email không đúng định dạng")
        .required("Thông tin này là bắt buộc"),
    person: yup
        .string()
        .required("Thông tin này là bắt buộc"),
    position: yup
        .string()
        .required("Thông tin này là bắt buộc"),
})

const domainAddSchema =  yup.object({
    domain: yup
        .string()
        .required('Bạn chưa nhập tên miền'),
})

const searchSchema = yup.object({
    keyword: yup
        .string()
        .required()
})

const createNewTicketSchema = yup.object({
    title: yup
        .string()
        .required("Thông tin này không được bỏ trống"),
    department: yup
        .string()
        .required("Thông tin này không được bỏ trống"),
    service: yup
        .string()
        .required("Thông tin này không được bỏ trống"),
    serviceValue: yup
        .string()
        .required("Thông tin này không được bỏ trống"),
    content: yup
        .string()
        .required("Thông tin này không được bỏ trống"),
})

const ticketDetailSchema = yup.object({
    content: yup
        .string()
        .required("Thông tin này không được bỏ trống"),
})

const domainCreateWebsiteForm =  yup.object({
    subdomain: yup
        .string()
        .matches(/^[a-z0-9]*$/,'Tên miền phụ chỉ bao gồm chữ cái thường và số')
        .min(3, 'Tên miền phụ tối thiểu 3 ký tự')
        .max(30, 'Tên miền phụ tối đa 30 ký tự')
        .required('Bạn chưa nhập tên miền'),
})

const configCreateWebsiteForm = yup.object({
    title: yup
        .string()
        .min(3,'Tiêu đề tối thiểu 3 ký tự')
        .max(80,'Tiêu đề tối thiểu 160 ký tự')
        .required("Thông tin này không được bỏ trống"),
    description: yup
        .string()
        .min(3,'Mô tả tối thiểu 3 ký tự')
        .max(160,'Mô tả tối thiểu 160 ký tự')
        .required("Thông tin này không được bỏ trống"),
    admin: yup
        .string()
        .matches(/^[a-z0-9]*$/,'Tài khoản admin chỉ bao gồm chữ cái thường và số')
        .min(3, 'Tài khoản admin tối thiểu 3 ký tự')
        .required("Thông tin này không được bỏ trống"),
    password: yup
        .string()
        .min(8, 'Vui lòng nhập mật khẩu tối thiểu 8 ký tự')
        .required("Thông tin này không được bỏ trống"),
    
})

export {
    loginSchema,
    starterSchema,
    registerSchema,
    forgotPasswordSchema,
    setNewPasswordSchema,
    userInfoSchema,
    userSecuritySchema,
    domainAddSchema,
    billingsSchema,
    searchSchema,
    createNewTicketSchema,
    ticketDetailSchema,
    domainCreateWebsiteForm,
    configCreateWebsiteForm,
    vertifySchema
}