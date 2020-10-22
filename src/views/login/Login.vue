<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <el-image :src="require('../../assets/avatar.jpg')" fit="contain"></el-image>
<!--                <img src="../../assets/avatar.jpg" alt=""/>-->
            </div>
            <el-form ref="loginFormRef" :rules="loginRules" :model="loginFormData" label-width="80px">
                <el-form-item label="账号：" prop="username">
                    <el-input prefix-icon="el-icon-user" type="text" v-model="loginFormData.username" ></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input prefix-icon="el-icon-lock" type="password" v-model="loginFormData.password" ></el-input>
                </el-form-item>
                <el-form-item class="login_btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            let validatePass = (rule, value, callback) => {
                if (value.trim() === '') {
                    callback(new Error('请输入密码'));
                } else if(value.trim().length < 6 ){
                    callback(new Error('密码长度应在6~16位之间'));
                } else if(value.trim().length > 16 ){
                    callback(new Error('密码长度应在6~16位之间'));
                }else if(value.trim().match(/\D/)==null){//为null表示不包含字母
                    callback(new Error('密码至少要包含数字和字母'));
                }else {
                    callback();
                }
            };
            return {
                loginFormData:{
                    username:'',
                    password:''
                },
                loginRules:{
                    username: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            login(){
                this.$refs.loginFormRef.validate((valid)=>{
                    if (valid) {
                        //this.$message.success("submit");
                        this.$message({
                            message: "submit",
                            center: true,
                            type: "success",
                            duration: 2000
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })
            },
            resetForm(){
                this.loginFormData.username='';
                this.loginFormData.password='';
                this.$refs.loginFormRef.resetFields();
            },
            // 判断是否含有大写字母
             hasCapital(str) {
                 const result = str.match(/^.*[A-Z]+.*$/);
                 return result != null;
             },
            // 判断是否含有小写字母
            hasLowercase(str) {
                const result = str.match(/^.*[a-z]+.*$/);
                return result != null;
            },
            // 判断是否含有数字
            hasNumber(str){
                const result = str.match(/^.*[0-9]+.*$/);
                return result != null;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .login_container
        height 100%;
        background-color #29a793;

    .login_box
        width 450px;
        height: 300px;
        background-color aliceblue;
        border-radius 5px;
        position absolute;
        left 50%;
        top 50%;
        transform translate(-50%,-50%);
        .avatar_box
            width 150px;
            height 150px;
            background-color #fff;
            border 1px solid #eee;
            border-radius 50%;
            padding 10px;
            box-shadow 0 0 10px #ddd;
            position absolute;
            left 50%;
            transform translate(-50%,-50%)
            .el-image
                width 100%;
                height 100%;
                border-radius 50%;
    .el-form
        position absolute;
        bottom 0;
        width:100%;
        padding 0 20px;
        box-sizing border-box;
    .login_btn
        display flex;
        justify-content flex-end;
</style>
