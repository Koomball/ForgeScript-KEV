import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$createSlashCommand",
    version: "KEV-1.0.0",
    description: "Creates a slash command",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "the slash commanda name",
            required: true,
            type: ArgType.String,
            rest: false,
        },
        {
            name: "desc",
            description: "the slash commands description",
            type: ArgType.String,
            rest: false,
        },
        {
            name: "type",
            description: "The type of slash command",
            rest: false,
            type: ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [text, iconURL, index]) {
        ctx.container.embed(index ?? 0).setFooter({
            text,
            iconURL: iconURL || undefined,
        })
        return this.success()
    },
})
