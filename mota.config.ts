interface MotaConfig {
    name: string;
}

function defineConfig(config: MotaConfig): MotaConfig {
    return config;
}

export default defineConfig({
    // 这里修改塔的name，请保持与全塔属性的完全相同，否则发布之后可能无法进行游玩
    name: 'template'
});
