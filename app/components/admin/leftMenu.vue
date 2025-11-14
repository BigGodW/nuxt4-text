<template>
    <div>
        <h1 class=" text-center m-2">网站设置</h1>
        <ul class="menu rounded-box gap-2">
            <li v-for="menuItem in menuList">
                <details>
                    <summary><van-icon :name="menuItem.icon" />{{ menuItem.title }}</summary>
                    <ul class="">
                        <li v-for="childrenMent in menuItem.children">
                            <nuxt-link :to="childrenMent.path">
                                <van-icon :name="childrenMent.icon" />
                                {{ childrenMent.title }}
                            </nuxt-link></li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</template>
<script setup>
const menuList = [
    // {
    //     title: '用户管理',
    //     icon: "manager",
    //     children: [
    //         { title: '用户列表', path: "/admin/user/list", icon: 'bars' },
    //         { title: '添加用户', path: "/admin/user/add", icon: 'friends' },
    //     ]
    // },
    // {
    //     title: '文章管理',
    //     icon: "column",
    //     children: [
    //         { title: '文章列表', path: "/admin/article/list", icon: 'bars' },
    //         { title: '添加文章', path: "/admin/article/add", icon: 'edit' },
    //     ]
    // },
    // {
    //     title: '文章分类',
    //     icon: "cluster",
    //     children: [
    //         { title: '分类列表', path: "/admin/category/list", icon: 'bars' },
    //         { title: '添加分类', path: "/admin/category/add", icon: 'add' },
    //     ]
    // },
    // {
    //     title: '网站设置',
    //     icon: "setting",
    //     children: [
    //         { title: '基本设置', path: "/admin/settings/basic", icon: 'bars' },
    //         { title: '安全设置', path: "/admin/settings/security", icon: 'lock' },
    //     ]
    // },
    {
        title: '轮播图',
        icon: "photo",
        children: [
            { title: '轮播图列表', path: "/admin/carousel/list", icon: 'bars' },
            { title: '添加轮播图', path: "/admin/carousel/add", icon: 'add' },
        ]
    }
]

</script>