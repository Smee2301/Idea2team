# Idea2Team — Technical Documentation

> Complete technical reference for the Idea2Team frontend application.

---

## 1. Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                      App.js (Router)                     │
├──────────────┬────────────────┬──────────────────────────┤
│  Public Pages│ Dashboard Pages│    Admin Pages            │
│  ┌─────────┐ │ ┌────────────┐ │ ┌──────────────────────┐ │
│  │  Home   │ │ │  Founder   │ │ │  AdminOverview       │ │
│  │  Login  │ │ │  Overview  │ │ │  ManageUsers         │ │
│  │Register │ │ │  PostProj  │ │ │  AdminManageProjects │ │
│  └─────────┘ │ │  ManageProj│ │ │  Reports             │ │
│              │ │  Applicat. │ │ └──────────────────────┘ │
│              │ │  Workspace │ │                          │
│              │ │  Profile   │ │                          │
│              │ ├────────────┤ │                          │
│              │ │ Freelancer │ │                          │
│              │ │  Overview  │ │                          │
│              │ │  Browse    │ │                          │
│              │ │  MyApps    │ │                          │
│              │ │  Workspace │ │                          │
│              │ │  Profile   │ │                          │
│              │ └────────────┘ │                          │
├──────────────┴────────────────┴──────────────────────────┤
│                  Shared Components                        │
│  Button │ Card │ Avatar │ StatusBadge │ SearchBar │ Modal │
│  StatsCard │ ProjectCard │ DataTable                      │
├──────────────────────────────────────────────────────────┤
│                  Layout Components                        │
│  Navbar │ Footer │ Sidebar │ Topbar │ DashboardLayout     │
├──────────────────────────────────────────────────────────┤
│                 Workspace Components                      │
│  TaskBoard │ ChatPanel │ FileUpload │ Milestones │ Team   │
├──────────────────────────────────────────────────────────┤
│                    CSS Design System                      │
│  variables.css │ global.css │ layout.css │ components.css │
│  pages.css │ workspace.css                                │
├──────────────────────────────────────────────────────────┤
│                     Static Data Layer                     │
│                      dummyData.js                         │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Routing Configuration

All routes are defined in `src/App.js` using React Router DOM v6.

```jsx
<Router>
  <Routes>
    {/* Public */}
    <Route path="/"           element={<Home />} />
    <Route path="/login"      element={<Login />} />
    <Route path="/register"   element={<Register />} />

    {/* Founder Dashboard */}
    <Route path="/founder/dashboard"    element={<FounderOverview />} />
    <Route path="/founder/post-project" element={<PostProject />} />
    <Route path="/founder/projects"     element={<ManageProjects />} />
    <Route path="/founder/applications" element={<Applications />} />
    <Route path="/founder/workspace"    element={<FounderWorkspace />} />
    <Route path="/founder/profile"      element={<FounderProfile />} />

    {/* Freelancer Dashboard */}
    <Route path="/freelancer/dashboard"    element={<FreelancerOverview />} />
    <Route path="/freelancer/browse"       element={<BrowseProjects />} />
    <Route path="/freelancer/applications" element={<MyApplications />} />
    <Route path="/freelancer/workspace"    element={<FreelancerWorkspace />} />
    <Route path="/freelancer/profile"      element={<FreelancerProfile />} />

    {/* Admin Dashboard */}
    <Route path="/admin/dashboard" element={<AdminOverview />} />
    <Route path="/admin/users"     element={<ManageUsers />} />
    <Route path="/admin/projects"  element={<AdminManageProjects />} />
    <Route path="/admin/reports"   element={<Reports />} />
  </Routes>
</Router>
```

---

## 3. Component Reference

### 3.1 Button Component

**File:** `src/components/common/Button.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | string | `'primary'` | `primary`, `secondary`, `outline`, `ghost`, `danger` |
| `size` | string | `'md'` | `sm`, `md`, `lg` |
| `onClick` | function | — | Click handler |
| `style` | object | — | Inline styles |
| `children` | node | — | Button content |

**Usage:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

---

### 3.2 Card Component

**File:** `src/components/common/Card.js`

| Prop | Type | Description |
|------|------|-------------|
| `className` | string | Additional CSS classes |
| `children` | node | Card content |

**Sub-components:** `Card.Header`, `Card.Body`

**Usage:**
```jsx
<Card>
  <Card.Header>
    <h3>Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Content goes here</p>
  </Card.Body>
</Card>
```

---

### 3.3 Avatar Component

**File:** `src/components/common/Avatar.js`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initials` | string | — | 1-2 letter initials |
| `color` | string | `'#4f46e5'` | Background color |
| `size` | string | `'md'` | `sm`, `md`, `lg` |

**Usage:**
```jsx
<Avatar initials="AM" color="#7c3aed" size="lg" />
```

---

### 3.4 StatusBadge Component

**File:** `src/components/common/StatusBadge.js`

| Prop | Type | Description |
|------|------|-------------|
| `status` | string | Status text — auto-maps to color |

**Status → Color Mapping:**

| Status | Color |
|--------|-------|
| `Active` | Green |
| `Pending`, `Under Review` | Yellow |
| `Completed` | Blue |
| `Rejected` | Red |
| `Shortlisted`, `Accepted` | Green |

---

### 3.5 StatsCard Component

**File:** `src/components/cards/StatsCard.js`

| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Metric label |
| `value` | string | Metric value |
| `icon` | string | Emoji icon |
| `trend` | string | Trend text (e.g., "+12%") |
| `trendDirection` | string | `up` or `down` |
| `color` | string | Accent color |

---

### 3.6 ProjectCard Component

**File:** `src/components/cards/ProjectCard.js`

| Prop | Type | Description |
|------|------|-------------|
| `project` | object | Project data object |

**Project object shape:**
```js
{
  id: 1,
  title: "AI-Powered SaaS Dashboard",
  company: "TechVista Inc.",
  founder: "Alex Morgan",
  description: "...",
  skills: ["React", "Node.js", "Python"],
  budget: "$8,000 - $15,000",
  duration: "2-3 months",
  status: "Active",
  applications: 12,
  category: "Web Development"
}
```

---

### 3.7 DataTable Component

**File:** `src/components/tables/DataTable.js`

| Prop | Type | Description |
|------|------|-------------|
| `columns` | array | Array of column header strings |
| `data` | array | Array of data items |
| `renderRow` | function | `(item, index) => <tr>...</tr>` |

**Usage:**
```jsx
<DataTable
  columns={['Name', 'Email', 'Role', 'Actions']}
  data={users}
  renderRow={(user, i) => (
    <tr key={i}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td><Button size="sm">Edit</Button></td>
    </tr>
  )}
/>
```

---

### 3.8 DashboardLayout Component

**File:** `src/components/layout/DashboardLayout.js`

| Prop | Type | Description |
|------|------|-------------|
| `role` | string | `'founder'`, `'freelancer'`, or `'admin'` |
| `children` | node | Page content |

**What it renders:**
- `<Sidebar>` — Role-based navigation
- `<Topbar>` — Search, notifications, user info
- Main content area with `{children}`

**Usage:**
```jsx
<DashboardLayout role="founder">
  <h1>My Dashboard</h1>
  {/* Page content */}
</DashboardLayout>
```

---

### 3.9 Sidebar Navigation Items

The sidebar renders different nav items based on the `role` prop:

**Founder:**
| Label | Route | Icon |
|-------|-------|------|
| Overview | `/founder/dashboard` | 📊 |
| Post Project | `/founder/post-project` | ➕ |
| My Projects | `/founder/projects` | 📁 |
| Applications | `/founder/applications` | 📨 |
| Workspace | `/founder/workspace` | 🛠️ |
| Profile | `/founder/profile` | 👤 |

**Freelancer:**
| Label | Route | Icon |
|-------|-------|------|
| Overview | `/freelancer/dashboard` | 📊 |
| Browse Projects | `/freelancer/browse` | 🔍 |
| My Applications | `/freelancer/applications` | 📤 |
| Workspace | `/freelancer/workspace` | 🛠️ |
| Profile | `/freelancer/profile` | 👤 |

**Admin:**
| Label | Route | Icon |
|-------|-------|------|
| Dashboard | `/admin/dashboard` | 📊 |
| Manage Users | `/admin/users` | 👥 |
| Manage Projects | `/admin/projects` | 📁 |
| Reports | `/admin/reports` | 📈 |

---

## 4. CSS Architecture

### File Import Order

```
variables.css   →  Design tokens (must be first)
global.css      →  Reset, base styles, utilities
layout.css      →  Navbar, Sidebar, Topbar, Footer
components.css  →  Buttons, Cards, Badges, Forms
pages.css       →  Page-specific styles
workspace.css   →  Workspace component styles
```

All files are imported in `App.js`:
```jsx
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/workspace.css';
```

### CSS Class Naming Convention

Classes follow a **component-based** naming approach:

```
.component-name          → Block
.component-name-element  → Element within block
.component-name.modifier → Variant/state

Examples:
.sidebar              → Sidebar block
.sidebar-nav-item     → Nav item inside sidebar
.sidebar.collapsed    → Collapsed sidebar state
.btn.btn-primary      → Primary button variant
```

### Key CSS Classes

| Class | File | Description |
|-------|------|-------------|
| `.page-header` | pages.css | Page title + action button row |
| `.stats-grid` | pages.css | 4-column stats cards grid |
| `.content-grid` | pages.css | 2-column main content layout |
| `.projects-grid` | pages.css | 3-column project cards grid |
| `.filter-bar` | components.css | Search + filter row |
| `.filter-chip` | components.css | Pill-shaped filter button |
| `.form-group` | components.css | Label + input wrapper |
| `.form-input` | components.css | Styled input/textarea/select |
| `.form-grid` | components.css | 2-column form layout |
| `.form-card` | pages.css | Card with form content |
| `.workspace-layout` | workspace.css | Main + sidebar workspace grid |
| `.application-card` | components.css | Application list item |
| `.activity-list` | pages.css | Activity feed container |
| `.auth-page` | pages.css | Split-screen auth layout |
| `.hero` | pages.css | Landing page hero section |

---

## 5. Dummy Data Schema

### Users

```js
{
  id: 1,
  name: "Alex Morgan",
  email: "alex@idea2team.com",
  role: "Founder",           // "Founder" | "Freelancer" | "Admin"
  status: "Active",          // "Active" | "Suspended"
  initials: "AM",
  color: "#4f46e5",
  joinDate: "Jan 15, 2026"
}
```

### Projects

```js
{
  id: 1,
  title: "AI-Powered SaaS Dashboard",
  company: "TechVista Inc.",
  founder: "Alex Morgan",
  description: "Building a comprehensive analytics dashboard...",
  skills: ["React", "Node.js", "Python", "TensorFlow"],
  budget: "$8,000 - $15,000",
  duration: "2-3 months",
  status: "Active",          // "Active" | "Pending" | "Completed"
  applications: 12,
  category: "Web Development",
  posted: "2 days ago"
}
```

### Applications

```js
{
  id: 1,
  freelancer: "Sarah Chen",
  freelancerInitials: "SC",
  project: "AI-Powered SaaS Dashboard",
  bid: "$12,000",
  status: "Under Review",   // "Under Review" | "Shortlisted" | "Accepted" | "Rejected"
  date: "Feb 10, 2026"
}
```

### Tasks

```js
{
  todo: [
    { id: 1, title: "Design system documentation", priority: "Medium", assignee: "SC" }
  ],
  inProgress: [
    { id: 4, title: "API endpoint integration", priority: "High", assignee: "RJ" }
  ],
  done: [
    { id: 7, title: "Project setup & configuration", priority: "High", assignee: "AM" }
  ]
}
```

### Stats (Founder / Freelancer / Admin)

```js
{
  title: "Active Projects",
  value: "8",
  icon: "📁",
  trend: "+2 this month",
  trendDirection: "up",
  color: "#4f46e5"
}
```

---

## 6. Page Descriptions

### Home Page (`/`)
- **Hero section:** Gradient background, headline, subtitle, CTA buttons, stats counters, mock project cards
- **Features section:** 6-card grid showing platform capabilities
- **How It Works:** 3-step process (Post → Find → Collaborate)
- **Testimonials:** 3 user review cards with star ratings
- **CTA section:** Final call-to-action with registration button

### Login Page (`/login`)
- **Split-screen layout:** Visual panel (left) + form panel (right)
- **Fields:** Email, Password, Remember me, Forgot password
- **Social auth:** Google + GitHub buttons
- **Link to:** Registration page

### Register Page (`/register`)
- **Split-screen layout:** Visual panel (left) + form panel (right)
- **Role selector:** Founder / Freelancer (static, no toggle)
- **Fields:** Full Name, Email, Password, Terms checkbox
- **Social auth:** Google signup button
- **Link to:** Login page

### Dashboard Overview Pages
- **Stats grid:** 4 metric cards (projects, earnings, applications, rating)
- **Content grid:** Left column (recent projects/cards) + Right column (activity feed)
- Role-specific data from `founderStats`, `freelancerStats`, `adminStats`

### Workspace Pages
- **2-column layout:** Main area (TaskBoard + Milestones + ChatPanel) + Sidebar (TeamMembers + FileUpload)
- Shared between Founder and Freelancer dashboards

### Profile Pages
- **Profile header card:** Cover image, avatar, name, role, meta details
- **Personal info section:** Name, email, phone, location, bio fields
- **Role-specific sections:** Company info (Founder) / Skills + Portfolio (Freelancer)

### Admin Pages
- **ManageUsers:** DataTable with user info, role badges, status, action buttons
- **ManageProjects:** DataTable with project info, category, budget, moderation actions
- **Reports:** Summary cards, chart placeholders, generated report download list

---

## 7. Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.1.1",
  "react-scripts": "5.0.1"
}
```

**Zero external UI dependencies.** All styling is custom CSS.

---

## 8. Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (responsive)

---

*Documentation generated on February 18, 2026*
