---
name: Conversation-uploaded media
description: Where uploaded files can live after a conversation is moved into a Replit project.
---

Uploaded files preserved during a conversation-to-project handoff may remain under `.local/conversation-workspace/files/` instead of the repository root. When a frontend imports those files or serves them as media, copy them into a project-owned location and keep the app's import/asset path consistent.

**Why:** The handoff preserves files but does not guarantee that the new artifact's existing Vite aliases can resolve them.

**How to apply:** After a handoff with attachments, check both the project root and `.local/conversation-workspace/files/` before wiring media imports.